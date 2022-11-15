import axios from "axios";

const URL = "http://localhost:2000";

const getProducts = async () => {
  const response = await axios.get(`${URL}/posts`);
  return response.data;
};

export { getProducts };
