#! /usr/bin/env node
const {execSync} = require('child_process')
const fs = require('fs')
const mustache = require('mustache')
const path = require('path')
const process = require('process');

function outputMessage(message) {
  const asterisks = "**********************************************************************************************************************************"
  const numAsterisks = message.length + 4
  console.log("")
  console.log(asterisks.substring(0, numAsterisks))
  console.log("* " + message + " *")
  console.log(asterisks.substring(0, numAsterisks))
}

function getProjectType(isTypescript) {
  return (isTypescript) ? "typescript" : "javascript"
}
function getPath(isTypescript, fileDir) {
  const type = getProjectType(isTypescript)
  return path.resolve(__dirname, `../src/${type}/${fileDir}`)
}

function renderTemplate (isTypescript, templatePath, templateVars, outputPath) {
  const inputPath = getPath(isTypescript, "/templates/" + templatePath)
  let template = fs.readFileSync(inputPath, 'utf8')
  let renderedMustache = mustache.render(template, templateVars)
  fs.writeFileSync(outputPath, renderedMustache, {encoding:'utf8',flag:'w'})
}

function getDirectoryContents(outputDir) {
  let fileDirs = fs.readdirSync(outputDir);
  fileDirs = fileDirs.filter(function(item) {
    return item !== '.DS_Store'
  })
  return fileDirs
}

function copySync(src, dest) {
  // Check if src is a directory
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    // Create the destination directory if it doesn't exist
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }

    // Recursively copy the contents of the src directory
    const files = fs.readdirSync(src);
    for (const file of files) {
      copySync(`${src}/${file}`, `${dest}/${file}`);
    }
  } else {
    // Create the destination directory if it doesn't exist
    if (!fs.existsSync(path.dirname(dest))) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
    }

    // If src is a file, copy it to the destination
    fs.copyFileSync(src, dest);
  }
}

const argv = require("yargs/yargs")(process.argv.slice(2))
  .option("name", {
    alias: "n",
    type: 'string',
    describe: "the name of the project"
  })
  .option("outputDir", {
    alias: "o",
    type: 'string',
    describe: "the output directory"
  })
  .option("useTypescript", {
    alias: "t",
    type: 'boolean',
    default: false,
    describe: "project should use Typescript (currently not supported)"
  })
  .demandOption(["name", "outputDir"])
  .help().argv;

const outputDir = argv.outputDir
const projectName = argv.name
const isTypescript = argv.t

// Explain that typescript is currently not supported
if (isTypescript) {
  console.error("\n*** Although this project is setup to allow a typescript-centric project to be generated, typescript is currently not supported.\n")
  process.exit(1)
}

// Verify that the outputDir is actually an existing directory
if ((fs.existsSync(outputDir) && fs.lstatSync(outputDir).isDirectory()) == false) {
  console.error("*** Error: This is not a directory: " + outputDir)
  process.exit(1)
}

// We start with an empty directory
const fileDirs = getDirectoryContents(outputDir)
if (fileDirs.length > 0) {
  console.error("*** Error: The output directory must be empty")
  execSync('ls -a ' + outputDir, {stdio: 'inherit'})
  process.exit(1)
}

console.log("\n*** Yiasou from 'create-yourstack-app'\n")
const type = getProjectType(isTypescript)
console.log("*** This project will be configured for '" + type + "'\n")

// Copy files from the "src/preNpmCopyFiles" directory
console.log("*** Copying the 'src/preNpmCopyFiles' directory")
copySync(getPath(isTypescript, "preNpmCopyFiles"), outputDir)

// Start a project
console.log("*** Creating package.json")
renderTemplate(isTypescript, 'package.json.template', {name: projectName}, `${outputDir}/package.json`)

console.log("*** Creating manifest.json")
renderTemplate(isTypescript, 'manifest.json.template', {name: projectName}, `${outputDir}/public/manifest.json`)

// Visit the output directory
process.chdir(outputDir)

// Initialize git so the husky can be installed
console.log("*** Initialize git")
execSync('git init', {stdio: 'inherit'})

// Install these repos
let reposJson = fs.readFileSync(getPath(argv.t, "npm.json"));
let repos = JSON.parse(reposJson);

repos.map((repo) => {
  outputMessage(repo.message)
  repo.execs.map((exec) => {
    execSync(exec, {stdio: 'inherit'})
  })
})

// Copy files from the "src/postNpmCopyFiles" directory
console.log("*** Copying the 'src/postNpmCopyFiles' directory")
copySync(getPath(isTypescript, "postNpmCopyFiles"), outputDir)

console.log("\n*** Project generation is complete")
