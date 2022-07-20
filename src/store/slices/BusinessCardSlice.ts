import { createSlice } from "@reduxjs/toolkit";

import { BusinessCard } from "../../types";

interface BusinessCardState {
  cards: BusinessCard[];
}

const initialState: BusinessCardState = {
  cards: [] as BusinessCard[],
};

const businessCardsSlice = createSlice({
  name: "businessCards",
  initialState,
  reducers: {
    hi: (state) => {
      console.log("hi")
    },
  }
});

export const { hi } = businessCardsSlice.actions;

export default businessCardsSlice.reducer;
