import axiosClient from "utils/axiosConfig";

const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "apikey=trilogy";

/*Google Books API Filter to return only needed fields
  Appending this to a search will give only the
  totalItems, title, description, authors, and imageLinks for each book in response
*/
const FILTERRESULTS =
  "&fields=totalItems,items(volumeInfo(title,description,authors,imageLinks))";

export default {
  getTheHobbit: function () {
    return axiosClient.get("/volumes?q=the%hobbit");
  },

  searchBooks: function (terms, pagination) {
    if (!terms) {
      terms = "the%hobbit";
    }
    const pages = pagination ? `&startIndex=${pagination}` : "";
    const maxIndex = "&maxIndex=10";
    const query = `/volumes?q=${terms}${maxIndex}${pages}${FILTERRESULTS}`;
    return axiosClient.get(query);
  },

  get: function (query) {
    return axiosClient.get(BASEURL + query + APIKEY);
  },
};
