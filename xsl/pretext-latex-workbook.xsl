<?xml version='1.0'?>

<!--********************************************************************
Copyright 2020 Robert A. Beezer

This file is part of PreTeXt.

PreTeXt is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 or version 3 of the
License (at your option).

PreTeXt is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with PreTeXt.  If not, see <http://www.gnu.org/licenses/>.
*********************************************************************-->

<!-- This file isolates customizations for the PreText documentation,  -->
<!-- The PreTeXt Guide, when produced as a PDF via LaTeX.  It is meant -->
<!-- to be used only with the PreTeXt "book" element.  At inception,   -->
<!-- 2019-11-07, it is not meant to yet be a general-purpose style.    -->

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

<!-- override the weird margins that pretext says, -->
<!-- but keep the workspace struts-->

<xsl:template match="worksheet" mode="new-geometry">
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

<!-- make it so the enums in tasks are in regular font not bold -->

<xsl:template match="exercise|task" mode="begin-task-list">
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

<!-- make it so chapters get a pagebreak -->
<!-- look for <xsl:text>\newpage&#xa;</xsl:text> -->
<!-- Should see whether this works with <introduction>s in the textbook -->
<xsl:template match="chapter" mode="environment">
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
    <xsl:text>\renewcommand{\titleptx}{#2}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\subtitleptx}{#3}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\shortitleptx}{#4}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\authorsptx}{#5}%&#xa;</xsl:text>
    <xsl:text>\renewcommand{\epigraphptx}{#6}%&#xa;</xsl:text>
    <!-- invoke the right LaTeX division, causes title format -->
    <!-- and spacing, along with setting running heads        -->
    <xsl:text>\</xsl:text>
    <xsl:value-of select="$div-name"/>
    <xsl:choose>
        <!-- Second trip through, building unnumbered version -->
        <!-- OR                                               -->
        <!-- Never numbered, always build a starred form      -->
        <!-- and manually add short version to ToC            -->
        <xsl:when test="$second-trip">
            <xsl:text>*</xsl:text>
            <xsl:text>{#2}%&#xa;</xsl:text>
            <xsl:text>\addcontentsline{toc}{</xsl:text>
            <xsl:value-of select="$div-name"/>
            <xsl:text>}{#4}&#xa;</xsl:text>
        </xsl:when>
        <!-- optional short title, and the real title  -->
        <!-- NB: the short title (#3) needs a group to -->
        <!-- protect a right square bracket "]" from   -->
        <!-- prematurely ending the optional argument  -->
        <xsl:otherwise>
            <xsl:text>[{#4}]{#2}%&#xa;</xsl:text>
            <xsl:text>\newpage&#xa;</xsl:text>
        </xsl:otherwise>
    </xsl:choose>
    <xsl:text>\label{#7}%&#xa;</xsl:text>
    <!-- close the environment definition, no finish -->
    <xsl:text>}{}%&#xa;</xsl:text>
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
