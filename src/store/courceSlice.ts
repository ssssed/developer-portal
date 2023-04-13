import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IThemeCard } from "../types";
import { cards } from "../utils/theme-cards.static";

interface InitialState {
  cources: IThemeCard[];
  courcesWay: IThemeCard[];
  isHidden: boolean;
}

const initialState: InitialState = {
  cources: cards,
  courcesWay: cards,
  isHidden: false,
};

const courceSlice = createSlice({
  name: "cource",
  initialState,
  reducers: {
    setCources(state, action: PayloadAction<IThemeCard[]>) {
      state.cources = action.payload;
    },
    toggleHiddenStatus(state, action: PayloadAction<boolean>) {
      state.isHidden = action.payload;
      if (state.isHidden)
        state.courcesWay = state.cources.filter(
          (cource) => cource.countCompletedTask === cource.countTask
        );
      else state.courcesWay = state.cources;
    },
  },
});

export const { setCources, toggleHiddenStatus } = courceSlice.actions;

export default courceSlice.reducer;
