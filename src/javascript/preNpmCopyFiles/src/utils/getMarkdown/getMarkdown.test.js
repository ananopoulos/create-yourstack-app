import getMarkdown from "./getMarkdown";

describe("/src/utils/getMarkdown", () => {
  test("should return parsed markdown", () => {
    const results = getMarkdown("test-post", "src/utils/getMarkdown/test-data");
    expect(results).toMatchObject({
      data: { title: "Test File" },
      content: "## This is a test",
    });
  });
});
