import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=picture,name,phone,email,location,dob";

 const API = {
  search: function() {
      return axios.get(BASEURL);
  }
};

export default API;
