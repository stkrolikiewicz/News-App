import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = "list"

export const mainContentDisplaySlice = createSlice({
  name: "mainContentDisplay",
  initialState: { value: initialStateValue },
  reducers: {
    setGrid: (state ) => {
      state.value = "grid"
    },
    setList: (state) => {
      state.value = "list"
    }
  }
})

export const { setGrid, setList } = mainContentDisplaySlice.actions;

export default mainContentDisplaySlice.reducer