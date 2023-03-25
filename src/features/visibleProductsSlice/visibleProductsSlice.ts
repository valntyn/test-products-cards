/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

type VisibleState = {
  visibleProducts: Product[];
};

const initialState: VisibleState = {
  visibleProducts: [],
};

export const visibleProductsSlice = createSlice({
  name: 'visibleProducts',
  initialState,
  reducers: {
    setVisibleProducts: (state, action: PayloadAction<Product[]>) => {
      state.visibleProducts = action.payload;
    },
  },
});

export const {
  setVisibleProducts,
} = visibleProductsSlice.actions;

export default visibleProductsSlice.reducer;
