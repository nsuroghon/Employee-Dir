import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=ca"

const API = {
  getUsers: function() {
    return axios.get(BASEURL);
  }
}

export default API;