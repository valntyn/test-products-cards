import { RootState } from '../../app/store';

export const selectedProducts
  = (state: RootState) => state.visibleProducts.visibleProducts;
