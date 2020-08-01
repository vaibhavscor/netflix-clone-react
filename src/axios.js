// axios is like a postman
// it is very godd to use we requesting a lot of request in our app

// everyrequest we are going to send will have same base address

import axios from "axios";

// base url to make request to the movie database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// it is just taking and appending to the above
//

// instance.get('/foo-bar')

// eg if we will take the instance.get('/foo-bar') it will take and append to the base url

export default instance;
