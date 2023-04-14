import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilteredCategory, IThemeCard } from "../types";
import { cards } from "../utils/theme-cards.static";

interface InitialState {
  cources: IThemeCard[];
  courcesWay: IThemeCard[];
  isHidden: boolean;
  filtered: FilteredCategory;
  catalogCources: IThemeCard[];
}

const initialState: InitialState = {
  cources: cards,
  courcesWay: cards,
  isHidden: false,
  filtered: "Все",
  catalogCources: cards,
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
    changeFilterField(state, action: PayloadAction<FilteredCategory>) {
      state.filtered = action.payload;

      if (state.filtered === "Пройденные") {
        state.catalogCources = state.cources.filter(
          (cource) => cource.countCompletedTask === cource.countTask
        );
        return;
      }
      if (state.filtered === "Не пройденные") {
        state.catalogCources = state.cources.filter(
          (cource) => cource.countCompletedTask < cource.countTask
        );
        return;
      }
      if (state.filtered === "Все") {
        state.catalogCources = [...state.cources];
        return;
      }
      state.catalogCources = state.cources.filter((cource) =>
        cource.categoryes.includes(state.filtered)
      );
    },
  },
});

export const { setCources, toggleHiddenStatus, changeFilterField } =
  courceSlice.actions;

export default courceSlice.reducer;
