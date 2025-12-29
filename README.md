Ok here is how the structure works:

`main.ptx` includes each of the chapter files `ch-NAME.ptx`, and each of the chapter files includes each of the section files `sec-NAME.ptx`.

The section files do a bunch of `component=` versioning. There are four components:
- "web": things that should only apply in the online version, not in either pdf
- "not-web": things that should only apply in pdf
- "workbook": things that should only appear in the workbook 
- "not-workbook": things that should appear in both the fullprint and the online version

Here is how those components are used:
- two versions of the `<title>` tag generate either the plain title (not-workbook) or the title decorated with "- Practice exercises" (workbook)
- the text of the section is enclosed in an `<introduction component="not-workbook">`
    - In this summer-2025 branch I am moving toward `<subsection component="not-workbook">`.
- each of the "Do you know..." lists is in a separate document as an `<ol>` element
- a `<conclusion component="workbook">` loads the "Do you know..." list in *after* the exercises in the workbook version
- a `<conclusion component="not-workbook">` loads the "Do you know..." list in *before* the exercises in other versions
- The file `NotSure.ptx` prints some "not-sure" instructions in not-workbook formats and the "Don't forget!" alert in the workbook version
- `WYD.ptx` is a `<conclusion component="workbook">` that is loaded between the exercises and the "Do you know ..." list

Some other important versioning happens in the exercise files `ex-NAME.ptx`:
- `ex-intro.ptx` is an `<introduction>` element that doesn't display in the workbook
- exercises 1-4 are not componented, so they appear in all builds
- if exercises 1-4 include xrefs to exercises 5-? in other sections, those "story also appears in" sentences are versioned in `<p component="...">` tags
    - I reference the containing section rather than the exercise directly in the workbook component tag
- exercises 5-8 are written in `<exercise component="not-workbook">`

Custom xsl in the `xsl` folder is very important to how this book works. In the latex versions:
- Most importantly, it makes `<exercises>` respect `<page>` and `@workspace` in the workbook version
- it contains some header customization
- it contains some customization of the enumerate labels and makes nested enumerates with empty introductions behave similarly to vanilla latex
- it makes sections start with a pagebreak
- it kills some extra periods generated in titles
- it formats `<aside>` to appear as margin notes
