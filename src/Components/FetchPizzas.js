import axios from "axios";

export async function fetchData(path, setState, setLoaded) {
  try {
    const {data} = await axios.get(`https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/${path}`)
    setState(data)
    setLoaded(true)
  } catch (e) {
    alert(e)
  }
}



