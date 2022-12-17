import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sortName: "популярности ↑",
  sortIndex: 0,
  pageNumber: 1
}

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSortIndex(state, action) {
      state.sortIndex = action.payload
    },
    setSortName(state, action) {
      state.sortName = action.payload
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload
    }

  }
})

export const {setCategoryId, setSortIndex, setSortName, setPageNumber} = filterSlice.actions

export default filterSlice.reducer