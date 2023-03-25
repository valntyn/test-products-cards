import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice/productsSlice';
import appliedQueryReducer from '../features/querySlice/querySlice';
import visibleProductReducer
  from '../features/visibleProductsSlice/visibleProductsSlice';
import filtersReducer from '../features/FilterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    visibleProducts: visibleProductReducer,
    appliedQuery: appliedQueryReducer,
    filters: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
