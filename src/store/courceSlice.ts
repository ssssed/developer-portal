import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IThemeCard } from "../types";
import { cards } from "../utils/theme-cards.static";

interface InitialState {
  cources: IThemeCard[];
}

const initialState: InitialState = {
  cources: cards,
};

const courceSlice = createSlice({
  name: "cource",
  initialState,
  reducers: {
    setCources(state, action: PayloadAction<IThemeCard[]>) {
      state.cources = action.payload;
    },
  },
});

export const { setCources } = courceSlice.actions;

export default courceSlice.reducer;
