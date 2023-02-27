import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import preprocessor from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild.js";

export async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents,
    specPattern: "**/*.{spec.js,feature}",
    baseUrl: "http://localhost:3000",
  },
  videoUploadOnPasses: false,
  videosFolder: "cypress/assets/videos",
  downloadsFolder: "cypress/assets/downloads",
  screenshotsFolder: "cypress/assets/screenshots",
});
