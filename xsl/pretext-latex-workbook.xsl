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
    <!ENTITY % entities SYSTEM "../entities.ent">
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

</xsl:stylesheet>
