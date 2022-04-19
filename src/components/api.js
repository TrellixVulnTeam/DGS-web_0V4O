import axios from "axios";
const KEY = "AIzaSyC5PC6uOSoYPmkPy54-oVwqmO2puklRo3w";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 6,
    key: KEY
  }
});
