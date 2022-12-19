import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
  sum: 0,
  products: []
}

const cartSlice = createSlice({
  name: "cartStates",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findProduct = state.products.find(obj => obj.id === action.payload.id)
      if (findProduct) {
        findProduct.count++
      } else {
        state.products.push({...action.payload, count: 1})
        console.log(action.payload.id)
      }
      state.sum = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
      state.amount++
    },
    minisProduct(state, action) {
      const findProduct = state.products.find(obj => obj.id === action.payload.id)
      if (findProduct && findProduct.count > 1) {
        findProduct.count--
        state.sum = state.products.reduce((sum, obj) => {
          return obj.price * obj.count + sum
        }, 0)
        state.amount = state.products.reduce((sum, obj) => {
          return obj.count + sum
        }, 0)
      } else {
        state.products.splice(action.payload.i, 1)
        state.sum = state.products.reduce((sum, obj) => {
          return obj.price * obj.count + sum
        }, 0)
        state.amount = state.products.reduce((sum, obj) => {
          return obj.count + sum
        }, 0)
      }
    },
    removeProduct(state, action) {
      state.products.splice(action.payload, 1)
      state.sum = state.products.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
      state.amount = state.products.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
    },
    clearProduct(state) {
      state.products = []
      state.amount = 0
      state.sum = 0
    }
  }
})

export const {setAmount, setSum, addProduct, removeProduct, clearProduct, minisProduct} = cartSlice.actions
export default cartSlice.reducer