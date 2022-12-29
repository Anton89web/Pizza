import {createSlice} from "@reduxjs/toolkit";
import {PizzaProps} from "../../Components/PizzaCards/Card";
import {RootState} from "../store";

interface CartSliceState {
    amount: number,
    sum: number,
    products: PizzaProps[]
}

const initialState: CartSliceState = {
    amount: JSON.parse(localStorage.getItem('cartBtn') as string)[0] || 0,
    sum: JSON.parse(localStorage.getItem('cartBtn') as string)[1] || 0,
    products: JSON.parse(localStorage.getItem("cartProducts") as string) || [],
}

const cartSlice = createSlice({
    name: "cartStates",
    initialState,
    reducers: {
        addProduct(state, action) {
            const findProduct = state.products.find(obj => (
                obj.id === action.payload.id &&
                obj.size === action.payload.size &&
                obj.testo === action.payload.testo
            ))
            if (findProduct) {
                findProduct.count++
            } else {
                state.products.push({...action.payload, count: 1})
            }
            state.sum = state.products.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
            state.amount++
        },
        minisProduct(state, action) {
            const findProduct = state.products.find(obj =>
                (
                    obj.id === action.payload.id &&
                    obj.size === action.payload.size &&
                    obj.testo === action.payload.testo
                ))
            if (findProduct) findProduct.count -= 1
            state.sum = state.products.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
            state.amount = state.products.reduce((sum, obj) => {
                return obj.count + sum
            }, 0)
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
export const selectCartState = (state: RootState) => state.cartSlice
export const {addProduct, removeProduct, clearProduct, minisProduct} = cartSlice.actions
export default cartSlice.reducer