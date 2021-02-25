import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const APIKEY = "AYAW-28HE-C3G1-0IAY";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
