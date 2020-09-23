import * as axios from "axios";

const apiFirebase = axios.create({
  baseURL: "https://o-movie.firebaseio.com/",
});

export default apiFirebase;
