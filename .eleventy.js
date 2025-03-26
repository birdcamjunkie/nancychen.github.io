import sortByDisplayOrder from "./src/utils/sort-by-display-order.js";

export default async function (config) {
  config.addPassthroughCopy("src/images");
  config.addCollection("work", (collection) =>
    sortByDisplayOrder(collection.getFilteredByGlob("./src/work/*.md")),
  );
  config.addCollection("featuredWork", (collection) =>
    sortByDisplayOrder(
      collection
        .getFilteredByGlob("./src/work/*.md")
        .filter((x) => x.data.featured),
    ),
  );
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
