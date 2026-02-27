Okay so here are some notes for myself about the build process and the complications thereunto appertaining. 

Complication #1: Legacy Edition
-- 
When I first converted to PreTeXt in 2024, I hosted at [rhinopotamus.github.io](https://rhinopotamus.github.io/just-enough-algebra/just-enough-algebra.html). In particular Augsburg instructors then began using this version at this url. It would be rude of me to break links mid-semester, or indeed ever w/o a large amount of advanced notice, so I don't want to touch this deployment.

Complication #2: Multiple Repos
--
Relatedly, because I didn't want to break this version, I created a new repository at [rhinopotamus/jea-summer-2025](https://github.com/rhinopotamus/jea-summer-2025). This is the repo where active development is occurring.

Ultimately I would like to merge that repo back into this one, bc it is confusing to have source files scattered across multiple repos. However, this would need to be done in such a way as to respect Complication #1.

Complication #3: Multiple Editions
--
In  [rhinopotamus/jea-summer-2025](https://github.com/rhinopotamus/jea-summer-2025), I have multiple branches. It's probably the case that only two of them are important:
- 2026
  - This is the one that has activities, the newly-spaced workbook, etc.
  - (Well, kinda. summer-2025 also has some of this. I should probably nuke this branch sooner than later to avoid confusion.)
- main
  - This is the one that's supposed to be a faithful recreation of the original Xanedu print textbook, and which I should probably continue offering for legacy reasons.

Complication #4: Cloudflare
-- 
[justenoughalgebra.org](https://justenoughalgebra.org/) is hosted on Cloudflare, which is currently set up to just deploy whatever gets pushed to the `gh-pages` branch of `jea-summer-2025`. I should probably either:
- make a fancy github workflow .yml along the lines of [TBIL's](https://github.com/TeamBasedInquiryLearning/library/blob/main/.github/workflows/pretext-cli.yml),
  - This seems like the best thing to do.
- do some fancy [build configuration stuff](https://developers.cloudflare.com/pages/configuration/build-configuration/) within Cloudflare Pages,
- or else fiddle with cloudflare's own [workflows](https://developers.cloudflare.com/workflows/)

Complication #5: Multiple Targets
-- 
(This is perhaps the least complicated of the complications.) The Point of doing this PreTeXt conversion was to produce the printed workbook in a nice way. Accordingly, I have three different targets for each edition:
- web
  - Probably this is the only one that I need to bother with a fancy workflow for.
- workbook
  - It is probably okay to only ever build this one manually and on like a semesterly cadence.
- textbook
  - Ditto. But also I need to think hard about this conversion, now that there are interactives in the 2026 edition.
