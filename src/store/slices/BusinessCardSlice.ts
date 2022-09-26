import { createSlice } from "@reduxjs/toolkit";
import { BusinessCardType } from "../../utils/types";

interface BusinessCardState {
  cards: BusinessCardType[];
}

const initialState: BusinessCardState = {
  cards: [] as BusinessCardType[],
};

const businessCardsSlice = createSlice({
  name: "businessCards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      // console.log("Pushing card...", action.payload);
      state.cards.push(action.payload as BusinessCardType);
    },
    clearCards: (state) => {
      state.cards = []
    }
  }
});

export const { addCard, clearCards } = businessCardsSlice.actions;

export default businessCardsSlice.reducer;
