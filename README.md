# Braze Trainer

A free, unofficial practice site for all eight Braze certifications. Pick a
certification, answer a domain-weighted quiz, get instant scoring with a
per-domain accuracy breakdown, and review explanations for every question.

Not affiliated with or endorsed by Braze, Inc. Question content is original,
written from Braze's publicly listed exam domains and competencies — no text
was copied from Braze's study guide PDFs.

It's a static site: plain HTML/CSS/JS, no build step, no backend, no
database. That's what makes it free to host.

## What's in here

```
index.html          the whole app shell (landing / quiz / results screens)
css/styles.css       all styling
js/data.js           every certification's metadata + question bank — edit this to add questions
js/app.js            app logic (quiz flow, scoring, results)
README.md            this file
```

## Deploy it for free with GitHub Pages

You don't need any server or hosting account beyond GitHub itself.

1. **Create a GitHub account** if you don't have one: go to
   [github.com/signup](https://github.com/signup) and follow the steps.
2. **Create a new repository.** Click the `+` in the top right of
   github.com → "New repository." Name it anything, e.g. `braze-trainer`.
   Keep it Public. Don't add a README (you already have one).
3. **Upload these files.** On your new empty repo's page, click
   "uploading an existing file," then drag in `index.html`, the `css`
   folder, the `js` folder, and this `README.md`. Commit the changes.
   (If you're comfortable with git and the command line instead:
   `git init`, `git add .`, `git commit -m "Initial commit"`,
   `git remote add origin <your-repo-url>`, `git push -u origin main`.)
4. **Turn on GitHub Pages.** In your repo, go to Settings → Pages.
   Under "Build and deployment," set Source to "Deploy from a branch,"
   Branch to `main` and folder to `/ (root)`. Save.
5. **Wait about a minute**, then refresh that Pages settings screen —
   it'll show your live URL, something like
   `https://your-username.github.io/braze-trainer/`. That's it, it's live
   and free, and stays free.

Any time you want to update content, edit the file on GitHub (or push a new
commit) and the live site updates automatically within a minute or two.

## Adding or editing questions

Everything lives in `js/data.js` as plain JavaScript objects — no build
step needed, just edit and save. Each certification looks like this:

```js
"marketing-specialist": {
  id: "marketing-specialist",
  name: "Braze Certified Marketing Specialist",
  short: "Marketing Specialist",
  level: "L2",
  cost: "$100",
  time: "90 min",
  format: "50 AI-proctored",
  passing: "69%",
  blurb: "One or two sentences shown on the landing card.",
  domains: [
    { code: "1.0", name: "Segmentation", weight: 19 },
    // ...weights should sum to 100
  ],
  questions: [
    {
      domain: "Segmentation",     // must exactly match a domain "name" above
      code: "1.0",                // matches that domain's code
      q: "Your question text?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: 0,                 // index into options, 0-based
      explain: "One sentence explaining the right answer, shown after submitting."
    },
    // add as many as you like — the results screen automatically
    // recalculates the domain accuracy breakdown from whatever's here
  ]
}
```

To add a brand-new certification, copy one of the existing blocks, give it
a unique key (e.g. `"my-new-cert"`), and add that key to the `CERT_ORDER`
array near the bottom of the file so it shows up on the landing page.

There's no character limit and no review step — just save the file (or
commit it on GitHub) and it's live.

## Local preview before publishing

If you want to see your edits before pushing them live, you don't need
anything installed beyond Python (which most computers already have).
From this folder, run:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Notes on scope

- Scores and "best score" badges are stored in each visitor's own browser
  (`localStorage`) — there's no account system and no data is collected
  or sent anywhere.
- Passing-score, pricing, and timing figures reflect Braze's published
  study guides at the time this was built and may drift out of date —
  the landing page links to braze.com/certification for current details.
