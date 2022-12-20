import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  productsPizza: []
}

const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.productsPizza = action.payload
      console.log(state.productsPizza)
    },

  }
})

export const {setPizzas} = pizzaSlice.actions
export default pizzaSlice.reducer