import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";
import {PizzaProps} from "../../Components/PizzaCards/Card";

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface PizzaJSON {
    "id": number
    "imageUrl": string
    "title": string
    "ingredients": string
    "types": number[]
    "sizes": number[]
    "price": number
    "category": number
    "rating": number
    "slice_price": number
}

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasStatus',
    async (path: string) => {
        const {data} = await axios.get<PizzaJSON[]>(`https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/pizzas?${path}`)
        return data
    }
)

interface PizzaSliceState {
    productsPizza: PizzaProps[]
    status: Status
}

const initialState: PizzaSliceState = {
    productsPizza: [],
    status: Status.LOADING
}

const pizzaSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.productsPizza = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending,
            (state, action) => {
                state.status = Status.LOADING
                state.productsPizza = []
            });

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            // @ts-ignore
            state.productsPizza = action.payload
            state.status = Status.SUCCESS
        });

        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR
            state.productsPizza = []
        });
    }
})

export const selectPizza = (state: RootState) => state.pizzaSlice
export const {setPizzas} = pizzaSlice.actions
export default pizzaSlice.reducer