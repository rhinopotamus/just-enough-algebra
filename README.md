Ok here is how the structure works:

`main.ptx` includes each of the chapter files `ch-NAME.ptx`, and each of the chapter files includes each of the section files `sec-NAME.ptx`.

The section files do a bunch of cute `component=` versioning:
- two versions of the `<title>` tag generate either the plain title or the title decorated with "- Practice exercises"
- the text of the section is enclosed in an `<introduction component="html">`
- each of the "Do you know..." lists is in a separate document as an `<ol>` element
- a `<conclusion component="html">` loads the "Do you know..." list in *before* the exercises in the html version
- a `<conclusion component="print">` loads the "Do you know..." list in *after* the exercises in the print version
- The file `NotSure.ptx` prints some "not-sure" instructions in the html component and the "Don't forget!" alert in the print version
- `WYD.ptx` is a `<conclusion component="print">` that is loaded between the exercises and the "Do you know ..." list

Some other important versioning happens in the exercise files `ex-NAME.ptx`:
- `ex-intro.ptx` is an `<introduction>` element that displays in the html version only
- exercises 1-4 are not componented, so they appear in both html and print builds
- if exercises 1-4 include xrefs to exercises 5-? in other sections, those "story also appears in" sentences are versioned in `<em component="...">` tags
    - I reference the containing section rather than the exercise directly in the print component tag
- exercises 5-8 are written in `<exercise component="html">`

Custom xsl in `pretext-latex-workbook.xsl` is very important to how this book works:
- it makes `<exercises>` respect `<page>` and `@workspace` from `<worksheet>`
- it overrides the weird margins that are applied to `<worksheet>`s so that they have the same margins specified by the geometry element in the publication file (though this may no longer be necessary, now that I'm using `<exercises>` in general)
- it contains some header customization
- it contains some customization of the enumerate labels 
- it makes it so new chapters get a pagebreak so the chapter titles appear alone on their own page
- it formats `<aside>` to appear as margin notes
