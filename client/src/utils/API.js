import axios from "axios";

const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  getTheHobbit: function() {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=the%hobbit");
  },

  get: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};