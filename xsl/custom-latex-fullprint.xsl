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
<!-- also kill on assemblages -->

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
