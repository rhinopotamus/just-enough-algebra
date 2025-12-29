<?xml version='1.0'?>

<!-- Conveniences for classes of similar elements -->
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./core/entities.ent">
    %entities;
]>

<!-- Identify as a stylesheet -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:xml="http://www.w3.org/XML/1998/namespace"
>

<!-- We override specific templates of the standard conversion -->
<!-- There is a relative path here, which bounces up a level   -->
<!-- from the file you are reading to be in the directory of   -->
<!-- principal stylesheets.  (Also for entities.ent above)     -->
<xsl:import href="./core/pretext-latex.xsl" />

<!-- Intend output for rendering by xelatex -->
<xsl:output method="text" />

<!-- header customization -->

<xsl:template match="book" mode="titleps-style">
    <xsl:text>%% Plain pages should have the same font for page numbers&#xa;</xsl:text>
    <xsl:text>\renewpagestyle{plain}{%&#xa;</xsl:text>
    <xsl:text>\setfoot{}{\pagefont\thepage}{}%&#xa;</xsl:text>
    <xsl:text>}%&#xa;</xsl:text>
    <xsl:text>%% Two-page spread as in default LaTeX&#xa;</xsl:text>
    <xsl:text>\renewpagestyle{headings}{%&#xa;</xsl:text>
    <xsl:text>\sethead%&#xa;</xsl:text>
    <xsl:text>[\pagefont\textbf{\thepage}]%&#xa;</xsl:text>
    <xsl:text>[]&#xa;</xsl:text>
    <xsl:text>[\pagefont\textsc{\ifthechapter{\chaptertitlename\space\thechapter.\space}{}\chaptertitle}]%&#xa;</xsl:text>
    <xsl:text>{\pagefont\textsc{\ifthesection{\thesection.\space\sectiontitle}{}}}%&#xa;</xsl:text>
    <xsl:text>{}%&#xa;</xsl:text>
    <xsl:text>{\pagefont\textbf{\thepage}}%&#xa;</xsl:text>
    <xsl:text>\headrule&#xa;</xsl:text>
    <xsl:text>}%&#xa;</xsl:text>
    <xsl:text>\pagestyle{headings}&#xa;</xsl:text>
</xsl:template>

<!-- enumerate label customization -->
<!-- and kill whitespace on empty introduction -->

<xsl:template match="exercise|task" mode="begin-task-list">
    <xsl:if test="
        child::task
        and (not(introduction) or introduction='')
    ">
        <xsl:text>\vspace{-\baselineskip-\parsep}%&#xa;</xsl:text>
    </xsl:if>
    <xsl:text>\begin{enumerate}[label=</xsl:text>
    <xsl:choose>
        <!-- parent is a "task", so context/container is a "task"   -->
        <!-- and it's children are "task" three deep in the nesting -->
        <xsl:when test="parent::task">
            <xsl:text>(\Alph*),ref=\theenumi.\theenumii.\Alph*</xsl:text>
        </xsl:when>
        <!-- container/context is a "task" (but it's parent is not), so -->
        <!-- the children that are "task" are two deep in the nesting   -->
        <xsl:when test="self::task">
            <xsl:text>\roman*.,ref=\theenumi.\roman*</xsl:text>
        </xsl:when>
        <!-- container/context is *not* a "task", it is something else,  -->
        <!-- and so children that are "task" are one deep in the nesting -->
        <xsl:otherwise>
            <xsl:text>(\alph*),ref=\alph*</xsl:text>
        </xsl:otherwise>
    </xsl:choose>
    <xsl:text>]%&#xa;</xsl:text>
</xsl:template>

<!-- make <exercises> respect <page> -->

<xsl:template match="exercises/page|worksheet/page">
    <xsl:apply-templates/>
    <xsl:if test="following-sibling::page and $b-latex-worksheet-formatted">
        <xsl:text>\clearpage&#xa;</xsl:text>
    </xsl:if>
</xsl:template>

<!-- make <exercises> respect @workspace -->

<!-- This template is called for items in a worksheet that can have a  -->
<!-- workspace specified.  It is important that this sometimes returns -->
<!-- an empty string, since that is a signal to not construct some     -->
<!-- surrounding infrastructure to implement the necessary space.      -->
<xsl:template match="&PROJECT-LIKE;|exercise|task" mode="sanitize-workspace">
    <!-- bail out if at a "task" that is not a terminal task -->
    <!-- bail out if publisher file says to not format worksheets        -->
    <!-- NB: a blank workspace is used as a signal in "divisionexercise" -->
    <!--     in LaTeX conversion, via parameter #3 of the  environment   -->
    <xsl:if test="not(child::task) and ($latex-worksheet-formatted = 'yes')">
        <!-- First element with @workspace -->
        <!-- Could be empty node-set, which will be empty string later -->
        <xsl:variable name="workspaced" select="ancestor-or-self::*[@workspace][1]"/>
        <xsl:variable name="raw-workspace" select="normalize-space($workspaced/@workspace)"/>
        <xsl:choose>
            <!-- bail out empty if empty or absent -->
            <xsl:when test="$raw-workspace = ''"/>
            <!-- old-style fraction of a page, indicated by a % at end   -->
            <!-- warn and convert to inches based on 10-inch page height -->
            <!-- ( (percent div 100) * 10 inch = div 10 )                -->
            <xsl:when test="substring($raw-workspace, string-length($raw-workspace) - 0) = '%'">
                <xsl:variable name="approximate-inches" select="concat(substring($raw-workspace, 1, string-length($raw-workspace) - 1) div 10, 'in')"/>
                <xsl:value-of select="$approximate-inches"/>
                <xsl:message>PTX:ERROR:  as of 2020-03-17 worksheet exercises' workspace should be specified in 'in' or in 'cm'.  Approximating a page fraction of <xsl:value-of select="@workspace"/> by <xsl:value-of select="$approximate-inches"/>.</xsl:message>
                <xsl:apply-templates select="." mode="location-report"/>
            </xsl:when>
            <xsl:when test="substring($raw-workspace, string-length($raw-workspace) - 1) = 'in'">
                <xsl:value-of select="$raw-workspace"/>
            </xsl:when>
            <xsl:when test="substring($raw-workspace, string-length($raw-workspace) - 1) = 'cm'">
                <xsl:value-of select="$raw-workspace"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:message>PTX:ERROR:  a worksheet exercises', project-likes' or tasks' workspace should be specified with units of 'in' or 'cm', and not as "<xsl:value-of select="@workspace"/>".  Using a default of "2in".</xsl:message>
                <xsl:text>2in</xsl:text>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:if>
</xsl:template>

<!-- make it so exercises divisions don't have a title -->

<xsl:template match="exercises" mode="environment">
    <!-- for specialized divisions we always make a numbered -->
    <!-- and unnumbered version, with the latter happening   -->
    <!-- on a second trip through the template               -->
    <xsl:param name="second-trip" select="false()"/>

    <xsl:variable name="elt-name" select="local-name(.)"/>
    <!-- the (traditional) LaTex name of this division -->
    <xsl:variable name="div-name">
        <xsl:apply-templates select="." mode="division-name"/>
    </xsl:variable>
    <!-- explanatory string in preamble -->
    <xsl:text>%% Environment for a PTX "</xsl:text>
    <xsl:value-of select="$elt-name"/>
    <xsl:text>" at the level of a LaTeX "</xsl:text>
    <xsl:value-of select="$div-name"/>
    <xsl:text>"&#xa;</xsl:text>
    <!-- Define implementation of a 5-argument environment          -->
    <!-- Template ensures consistency of definition and application -->
    <xsl:text>\NewDocumentEnvironment{</xsl:text>
    <xsl:apply-templates select="." mode="division-environment-name"/>
    <!-- second trip through for a specialized -->
    <!-- division, build unnumbered version    -->
    <xsl:if test="$second-trip">
        <xsl:text>-numberless</xsl:text>
    </xsl:if>
    <xsl:text>}{mmmmmmm}&#xa;</xsl:text>
    <xsl:text>{%&#xa;</xsl:text>
    <!-- load 6 macros with values, for style writer use -->
    <xsl:text>\renewcommand{\divisionnameptx}{#1}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\titleptx}{}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\subtitleptx}{}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\shortitleptx}{}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\authorsptx}{#5}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\epigraphptx}{#6}%&#xa;</xsl:text>
    <!-- close the environment definition, no finish -->
    <xsl:text>}{}%&#xa;</xsl:text>
    <!-- send specialized division back through a second time -->
    <xsl:if test="not($second-trip)">
        <xsl:apply-templates select="." mode="environment">
            <xsl:with-param name="second-trip" select="true()"/>
        </xsl:apply-templates>
    </xsl:if>
</xsl:template>

<!-- make it so sections BEGIN with a pagebreak -->

<xsl:template match="section" mode="environment">
    <!-- for specialized divisions we always make a numbered -->
    <!-- and unnumbered version, with the latter happening   -->
    <!-- on a second trip through the template               -->
    <xsl:param name="second-trip" select="false()"/>

    <xsl:variable name="elt-name" select="local-name(.)"/>
    <!-- the (traditional) LaTex name of this division -->
    <xsl:variable name="div-name">
        <xsl:apply-templates select="." mode="division-name"/>
    </xsl:variable>
    <!-- explanatory string in preamble -->
    <xsl:text>%% Environment for a PTX "</xsl:text>
    <xsl:value-of select="$elt-name"/>
    <xsl:text>" at the level of a LaTeX "</xsl:text>
    <xsl:value-of select="$div-name"/>
    <xsl:text>"&#xa;</xsl:text>
    <!-- Define implementation of a 5-argument environment          -->
    <!-- Template ensures consistency of definition and application -->
    <xsl:text>\NewDocumentEnvironment{</xsl:text>
    <xsl:apply-templates select="." mode="division-environment-name"/>
    <xsl:text>}{mmmmmmm}&#xa;</xsl:text>
    <xsl:text>{%&#xa;</xsl:text>
    <!-- load 6 macros with values, for style writer use -->
    <xsl:text>\renewcommand{\divisionnameptx}{#1}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\titleptx}{#2}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\subtitleptx}{#3}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\shortitleptx}{#4}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\authorsptx}{#5}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\epigraphptx}{#6}%&#xa;</xsl:text>
    <!-- send a newpage, -->
    <!-- invoke the right LaTeX division, causes title format -->
    <!-- and spacing, along with setting running heads        -->
    <xsl:text>\newpage \</xsl:text>
    <xsl:value-of select="$div-name"/>
    <xsl:text>[{#4}]{#2}%&#xa;</xsl:text>
    <xsl:text>\label{#7}%&#xa;</xsl:text>
    <!-- close the environment definition, no finish -->
    <xsl:text>}{}%&#xa;</xsl:text>
</xsl:template>

<!-- kill trailing period on conclusions "When you're done ..." etc -->
<!-- also kill for assemblages -->

<xsl:template match="section/conclusion|assemblage" 
              mode="title-wants-punctuation">
    <xsl:value-of select="false()"/>
</xsl:template>

<!-- aside formatting  -->
<!-- this could work for all aside-like -->
<!-- but I only use aside -->
<xsl:template match="aside" mode="environment">
    <xsl:text>%% aside: un-numbered margin note&#xa;</xsl:text>
    <xsl:text>\usepackage{marginnote}&#xa;</xsl:text>
    <xsl:text>\tcbset{ asidestyle/.style={&#xa;</xsl:text>
    <xsl:text>enhanced jigsaw, size=fbox,&#xa;</xsl:text>
    <xsl:text>colframe=black, colback=white,&#xa;</xsl:text>
    <xsl:text>boxrule=1pt, leftrule=0pt, rightrule=0pt,&#xa;</xsl:text>
    <xsl:text>arc=0pt, outer arc=1pt, boxsep=1pt, top=1pt, bottom=1pt,&#xa;</xsl:text>
    <xsl:text>nobeforeafter, width=\marginparwidth, fontupper=\scriptsize,&#xa;</xsl:text>
    <xsl:text>if odd page or oneside={flushleft upper}{flushright upper} } }&#xa;</xsl:text>
    <xsl:text>\NewDocumentEnvironment{aside}{m m m +b}&#xa;</xsl:text>
    <xsl:text>{\marginnote{\begin{tcolorbox}[&#xa;</xsl:text>
    <xsl:text>phantomlabel={#3}, asidestyle] #4 \end{tcolorbox} } }&#xa;</xsl:text>
    <xsl:text>{}&#xa;</xsl:text>
</xsl:template>


</xsl:stylesheet>
