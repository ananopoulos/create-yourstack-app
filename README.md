![License](https://img.shields.io/github/license/ananopoulos/create-yourstack-app)

# Create Your Stack App

## Description
When you try to scaffold a web app with generators such as `create-react-app`, the results are more or less a black box. Experimenting becomes a challenge. If you try to start your own web app from scratch and start npm installing different packages, it's hard to iterate by uninstalling, reinstalling, and configuring those packages.

[**create-yourstack-app**](https://github.com/ananopoulos/create-yourstack-app) is an alternative to `create-react-app` and similar generators. It is designed for experimentation. This web app generator is based on a recipe which allows you to easily try new packages or new package versions to build out a Hello World version of your web app.

This version of [**create-yourstack-app**](https://github.com/ananopoulos/create-yourstack-app) comes pre-configured with a tech stack that you can use as a starting point. It produces a blogging app based on Next JS that you can deploy on [Vercel](https://vercel.com) or [AWS Amplify](https://aws.amazon.com/amplify/) and is SEO friendly. The sample app was used as the basis for [andynanopoulos.com](https://www.andynanopoulos.com):

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

It is a non-trivial task to get many of these technologies to co-exist. This is why the versions are locked except for patches.

### Sample Tech Stack Features
* Web App
  * Next JS 13
    * /app Directory
    * SSR
  * Sample blogging app - no CMS required!
  * Sticky header, floating footer
* UI Components
  * React 18
  * Atomic UI directory structure
* CSS
  * Tailwind CSS
  * Tailwind Typography used for rendering Markdown (example modifications in tailwind.config.js)
* SEO
  * <meta> tags including "og" and "twitter"
  * Article Structured Data for blog posts
  * Static routes via Next SSR
  * Sitemap generator
* Testing
  * Cypress for end-to-end BDD testing using Cucumber pre-processor
  * Jest and React Testing Library for component and utility testing
  * Code Coverage results in /build directory
  * Storybook for manual component testing and documentation
  * Pre Commit and Pre Push git hooks
* Coding Standards
  * /app and /src files checked with ESLint and Prettier

## Prerequisites

[create-yourstack-app](https://github.com/ananopoulos/create-yourstack-app) has been tested on a Mac using node version 16.15.0 and npm version 8.5.5

## Installation

Clone this github repo: [create-yourstack-app](https://github.com/ananopoulos/create-yourstack-app)
```
cd create-yourstack-app
npm install
```

## Usage

The first step in generating your app is to select and test your technology stack. [create-yourstack-app](https://github.com/ananopoulos/create-yourstack-app) follows this pattern:
- Copy all of the files under the 'src/preNpmCopyFiles' directory to the output directory
- 'Exec' all of the commands in the 'src/npm.json' file
- Copy all of the files under the 'src/postNpmCopyFiles' directory to the output directory

Select the use cases for your app and group the packages together in the `npm.json` file. Here is an example snippet:
```
  {
    "message": "Installing support for blog posts",
    "execs":[
      "npm install gray-matter@4.0.x",
      "npm install react-markdown@8.0.x",
      "npm install remark-gfm@3.0.x",
      "npm install rehype-raw@6.1.x",
      "npm install @tailwindcss/typography@0.5.x -D",
      "npm install reading-time@1.5.x"
    ]
  },
  {
    "message": "Installing support for generating a sitemap",
    "execs":[
      "npm install mustache@4.2.x"
    ]
  }
```
This technique reminds you what each package will be used for and at what major and minor version you are testing.

These steps form the 'recipe' for creating a web app using your selection of open-source packages. Once you have completed your customizations, you are ready to iterate and test a 'Hello-world' version of your app:

```sh
cd create-yourstack-app
node bin/index.cjs -n Hello-world -o ~/temp
npm run build
npm run start
```
When you make changes, run these tests:

```sh
npm run test
npm run lint
npm run dev, http://localhost:3000, <ctrl> C
npm run build, npm run start, http://localhost:3000, npm run cypress:run, <ctrl> C
npm run storybook, http://localhost:6006
```

As you experiment, delete the output, modify the recipe, and regenerate the basic web app. When you are satisfied, branch this version of the generator and finish building out your real web app.

## License

Create Your Stack App is open source software [licensed as MIT](https://github.com/ananopoulos/create-yourstack-app/LICENSE).

## Contribute
Help us out! You can to this by

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

### How to Contribute
If you'd like to contribute to this project, follow this Github process:
[PR's via Forking a Project](https://docs.github.com/en/get-started/quickstart/contributing-to-projects
)
### Any contributions you make will be under the MIT Software License
When you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project.

### Report bugs using Github's Issues
We use GitHub issues to track issues and tasks. Report an issue by [opening a new issue](https://github.com/ananopoulos/create-yourstack-app/issues)
