import { readFileSync } from "fs";
import { resolve } from "path";

describe("Do not forget to", () => {
  test("update companyName used in Header and Footer in /src/constants.js file", () => {
    let hasBeenUpdated = false;
    const pathToConstantsJsFile = resolve(
      __dirname,
      "../src/utils/constants.js"
    );
    const fileContents = readFileSync(pathToConstantsJsFile, "utf8");
    if (fileContents.indexOf("company-name") == -1) {
      hasBeenUpdated = true;
    }
    expect(hasBeenUpdated).toBe(true);
  });

  test("update baseUrl used for SEO in /src/constants.js file", () => {
    let hasBeenUpdated = false;
    const pathToConstantsJsFile = resolve(
      __dirname,
      "../src/utils/constants.js"
    );
    const fileContents = readFileSync(pathToConstantsJsFile, "utf8");
    if (fileContents.indexOf("localhost:3000") == -1) {
      hasBeenUpdated = true;
    }
    expect(hasBeenUpdated).toBe(true);
  });
});
