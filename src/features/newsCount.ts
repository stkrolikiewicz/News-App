import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialStateValue = 0

export const newsCountSlice = createSlice({
  name: "newsCount",
  initialState: { value: initialStateValue },
  reducers: {
    setCount: (state, action: PayloadAction<number> ) => {
      state.value = action.payload
    },
  }
})

export const { setCount } = newsCountSlice.actions;

export default newsCountSlice.reducer