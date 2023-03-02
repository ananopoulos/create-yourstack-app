![License](https://img.shields.io/github/license/ananopoulos/create-yourstack-app)

# Create Your Stack App

## Description
Web app developers heavily rely on open-source projects to build their applications. As the industry continues to evolve and existing patterns shift, it's important for developers to sharpen their skills especially at a time when AI bots are writing code. Developers need to be system engineers and not just coders.

'create-yourstack-app' is a customizable app generator which exposes all dependencies and configurations. Unlike 'create-react-app' which creates a black box, this tool allows you to understand all of the choices that you make. 'create-yourstack-app' will allow you to:

- Experiment with new technologies or new versions of existing technologies
- Regenerate your app's scaffolding

This version of 'create-yourstack-app' creates a sample app pre-configured with an ecosystem consisting of these technologies locked to particular major.minor.x version. The sample app was used as the basis for [andynanopoulos.com](https://www.andynanopoulos.com):

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

## Prerequisites

'create-yourstack-app' has been tested on a Mac using node version 16.15.0 and npm version 8.5.5

## Installation

Clone this github repo: [create-yourstack-app](https://github.com/ananopoulos/create-yourstack-app)

## Usage

The first step in generating your app is to select and test your technology stack. 'create-yourstack-app' follows this pattern:
- Copy all of the files under the 'src/preNpmCopyFiles' directory to the output directory
- 'Exec' all of the commands in the 'src/npm.json' file
- Copy all of the files under the 'src/postNpmCopyFiles' directory to the output directory

These steps form the 'recipe' for creating an app using your selection of open-source projects. Once you have completed your customizations, you are ready to iterate and test a 'Hello-world' version of your app:

```sh
cd create-yourstack-app
node bin/index.cjs -n Hello-world -o ~/temp
```
As you make changes, run these tests:

```sh
npm run test
npm run lint
npm run dev, http://localhost:3000, <ctrl> C
npm run build, npm run start, http://localhost:3000, npm run cypress:run, <ctrl> C
npm run storybook, http://localhost:6006
```

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
