import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
  sum: 0,
}

const cartSlice = createSlice({
  name: "cartStates",
  initialState,
  reducers: {
    setAmount(state, action) {
      state.amount = action.payload
    },
    setSum(state, action) {
      state.sum = action.payload
    }
  }
})

export const {setAmount, setSum} = cartSlice.actions
export default cartSlice.reducer