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
<xsl:import href="./core/pretext-html.xsl" />

<!-- kill trailing period on conclusions "When you're done ..." etc -->
<!-- also kill on assemblages -->

<xsl:template match="section/conclusion|assemblage" 
              mode="title-wants-punctuation">
    <xsl:value-of select="false()"/>
</xsl:template>


</xsl:stylesheet>
