import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface FilterSliceState {
    categoryId: number
    searchValue: string
    sortName: string
    sortIndex: number
    pageNumber: number
}

const initialState: FilterSliceState = {
    categoryId: 0,
    searchValue: '',
    sortName: "популярности ↑",
    sortIndex: 0,
    pageNumber: 1
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSortIndex(state, action: PayloadAction<number>) {
            state.sortIndex = action.payload
        },
        setSortName(state, action: PayloadAction<string>) {
            state.sortName = action.payload
        },
        setPageNumber(state, action: PayloadAction<number>) {
            state.pageNumber = action.payload
        }

    }
})
export const selectFilter = (state: RootState) => state.filterSlice
export const {setCategoryId, setSortIndex, setSortName, setPageNumber, setSearchValue} = filterSlice.actions

export default filterSlice.reducer