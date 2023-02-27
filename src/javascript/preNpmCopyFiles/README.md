## This is the 'Hello World' version of your app. Follow these steps until your are satisfied with the results:

* From the "temp" project:
  * Delete everything
  * Run the `rm -rf .git` command
* From the "create-yourstack-app" project: 
  * Modify the tech stack in the "npm.json" file
  * Update the directory and files in the "preNpmCopyFiles", "postNpmCopyFiles", and "templates" directories to be used as your starting point
  * Run the `node bin/index.js -n foo -o ~/temp` command
* From the "temp" project:
  * Run the `npm run build`,`npm run start` commands
  * Visit each page to make sure there are no runtime errors
* If you are happy, start your real project!
* If not, repeat the process and enjoy the journey and learning experience!

## Don't Forget To
* Replace the public/favicon.ico with your own
* Update the src/utils/constants.js file

## Sample Tech Stack
Current main goal is to get all of the tech to play nicely with Next 13 (SSR) and React 18

| Tech | Version | Purpose |
|------|---------| ------- |
| [Next](https://nextjs.org) | 13.2 | Framework for building React-based web apps|
| [React](https://reactjs.org) | 18.2 | Framework for creating component-based UIs|
| [tailwindcss](https://tailwindcss.com) | 3.2 | CSS framework|
| [react-markdown](https://github.com/remarkjs/react-markdown) | 8.0 | Used to render blog posts |
| [gray-matter](https://github.com/jonschlinkert/gray-matter) | 4.0 | Extracts meta-data from markdown files |
| [reading-time](https://github.com/ngryman/reading-time) | 1.5 | Estimates the amount of time to read a markdown file|
| [storybook](https://storybook.js.org) | 7.0 Beta 15 | Framework from manually testing and documenting React components |
| [cypress](https://www.cypress.io) | 12.4 | Enables BDD testing|
| [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) | 15.1 | Enables BDD testing|
| [jest](https://jestjs.io) | 29.3 | Provides framework for unit testing|
| [eslint](https://eslint.org) | 8.30 | Enforces a coding standard |
| [prettier](https://prettier.io) | 2.8 | Enforces a coding standard |
| [husky](https://github.com/typicode/husky) | 8.0 | Provides git hooks |
| [mermaid](https://mermaid.js.org) | 10.0 | Provides diagrams for blog posts |

## Sample Features
* Web App
  * Next JS 13
    * App Directory
    * SSR
  * Sample blogging app - no CMS required!
  * Sticky header, floating footer
* UI Components
  * React
  * Atomic UI directory structure
* CSS
  * Tailwind CSS
  * Tailwind Typography used for rendering Markdown (example modifications in tailwind.config.js)
* SEO
  * <meta> tags including "og" and "twitter"
  * Article Structured Data for blog posts
  * Static routes via Next SSR
  * Sitemap generator
* Google Lighthouse Analysis within Chrome Developer Tools:
![Lighthouse](/images/lighthouse.webp)
  * .webp images for performance gains
* Testing
  * Cypress for end-to-end BDD testing using Cucumber pre-processor
  * Jest and React Testing Library for component and utility testing
  * Code Coverage results in /build directory
  * Storybook for manual component testing and documentation
  * Pre Commit and Pre Push git hooks
* Coding Standards
  * /app and /src files checked with ESLint and Prettier
* `npm run` scripts
  * build
  * build-sitemap
  * cypress:open
  * cypress:run
  * dev
  * lint
  * start
  * storybook
  * storybook-build
  * storybook-build-test
  * test

## Sample Directory Structure

### Philosophy
* `app` directory is in beta and does not contain any components since we want components to be reusable
* `src\components` directory follows the Atomic Design philosophy. Also, each component and utility is in its own directory in order to keep .stories, .tests, and test data co-located with the component
* `documentation\tech-specs` directory contains all technical specifications written in Markdown including diagrams
 using Mermaid.js format. A VS Code plugin will render the drawings.
* npm installed project config files are included in their own files, if possible, and not in `package.json`

```
├── __tests__                Jest tests that are not related to components
├── .husky                   Git hooks
├── .next                    next build directory
├── .storybook               Storybook configuration files
├── app                      Next application pages
│   ├── blog
│   │   ├── [slug]
│   │   │   ├── page.jsx
│   │   ├── page.jsx
│   ├── layout.jsx
│   ├── output.css
│   ├── page.jsx
├── build                    Jest code coverage reports
├── cypress                  Cypress feature and spec tests (BDD)
├── documentation            Any documentation that should be in source control
├── node_modules
├── public                   Files needed to pass Lighthouse audit as well as images
├── src
│   ├── components           React .jsx files, *.test.js files, and *.stories.js files
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   ├── content
│   │   ├── posts            Blogging site posts for SSR
│   ├── styles
│   │   ├── globals.css
│   ├── utils                Javascript utilities including their tests
├── storybook                Storybook source files that don't reside with the components
├── .babelrc.json
├── .cypress-cucumber-preprocessorrc.json
├── .env
├── .env.production
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── cypress.config.mjs
├── jest.config.js
├── next.config.js
├── package-lock.json 
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Recommended VS Code Extensions
* [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Services that will host Next apps
* [Vercel](https://vercel.com)
* [AWS Amplify](https://aws.amazon.com/amplify/)

## References
* [Cucumber Gherkin Syntax used for Cypress Testing](https://cucumber.io/docs/gherkin/reference/)
* [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
* [Google SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
* [Google and Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
* [Open Graph Protocol](https://ogp.me)
* [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)
* [Atomic Design for Organizing Components](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/)
* [.webp images](https://developers.google.com/speed/webp/docs/using)