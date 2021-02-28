import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&inc=id,picture,name,cell,email,dob"

const API = {
  getUsers: function() {
    return axios.get(BASEURL);
  }
}

export default API;