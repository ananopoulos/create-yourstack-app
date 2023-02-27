import getMarkdowns from "./getMarkdowns";

describe("/src/utils/getMarkdowns", () => {
  test("should return parsed markdown files", () => {
    const expectedResults1 = {
      data: { title: "Test File 1", sort: "February 1, 2023" },
      slug: "test-post-1",
    };
    const expectedResults2 = {
      data: { title: "Test File 2", sort: "January 1, 2023" },
      slug: "test-post-2",
    };

    const results = getMarkdowns("src/utils/getMarkdowns/test-data");
    expect(results).toContainEqual(expectedResults1);
    expect(results).toContainEqual(expectedResults2);
  });
});
