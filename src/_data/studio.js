import EleventyFetch from "@11ty/eleventy-fetch";

/**
 * Grabs the remote data for studio images and returns back
 * an array of objects
 *
 * @returns {Array} Empty or array of objects
 */
export default async function () {
  try {
    let url = "https://11ty-from-scratch-content-feeds.piccalil.li/media.json";
    const { items } = await EleventyFetch(url, {
      duration: "1d",
      type: "json",
    });
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}
