import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = false

export const mobileMenuOpenSlice = createSlice({
  name: "mobileMenuOpen",
  initialState: { value: initialStateValue },
  reducers: {
    toggleMenu: (state) => {
      state.value = !state.value
    },
  }
})

export const { toggleMenu } = mobileMenuOpenSlice.actions;

export default mobileMenuOpenSlice.reducer