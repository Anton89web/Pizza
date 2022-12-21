import axios from "axios";

const FetchPizzas = async function (path) {
  const mockApi = 'https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/pizzas?'
  const response = await axios.get(`${mockApi}${path}`)
  console.log(response.data)
  return response.data
};

export default FetchPizzas;