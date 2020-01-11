import axios from "axios";

const KEY = "AIzaSyDDIOJHEekUr3qcmO161KaFLwnGPsTj3q0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
