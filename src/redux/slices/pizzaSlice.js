import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async ({path}) => {
    const {data} = await axios.get(`https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/pizzas?${path}`)
    return data
  }
)
const initialState = {
  productsPizza: [],
  status: 'loading',
}

const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.productsPizza = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
      state.productsPizza = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.productsPizza = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error'
      state.productsPizza = []
    }
  },
})

export const {setPizzas} = pizzaSlice.actions
export default pizzaSlice.reducer