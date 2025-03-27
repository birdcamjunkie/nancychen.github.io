import sortByDisplayOrder from "./src/utils/sort-by-display-order.js";
import dateFilter from "./src/filters/date-filter.js";
import w3DateFilter from "./src/filters/w3-date-filter.js";

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
  config.addCollection("blog", (collection) =>
    [...collection.getFilteredByGlob("./src/posts/*.md")].reverse(),
  );

  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);

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
