/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsFromServer } from '../../api/products';
import { Product } from '../../types/Product';

type ProductState = {
  products: Product[];
  isLoad: boolean;
};

export const getProducts = createAsyncThunk(
  'products/load',

  async () => {
    return getProductsFromServer();
  },
);

const initialState: ProductState = {
  products: [],
  isLoad: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products
        .filter(product => product.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.isLoad = false;
      });
  },
});

export const {
  addProduct,
  removeProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
