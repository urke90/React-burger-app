import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://new-react-burger-builder.firebaseio.com/",
});

export default instance;
