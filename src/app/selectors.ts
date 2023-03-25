import { createSelector } from '@reduxjs/toolkit';
import { Filter } from '../types/Filter';
import { Product } from '../types/Product';

export const selectAllProducts
  = (state: { products: { products: Product[]; }; }) => state.products.products;

export const selectQuery
  = (
    state: {
      appliedQuery: { appliedQuery: string; };
    },
  ) => state.appliedQuery.appliedQuery;

export const selectActiveFilter
  = (state: { filters: Filter; }) => state.filters;

export const selectProductsBySearch = createSelector(
  [selectAllProducts, selectQuery],
  (allProducts: Product[], query: string) => {
    if (query) {
      return allProducts.filter(({ title, description, brand }) => (
        title.toLowerCase().trim().includes(query)
        || description?.toLowerCase().trim().includes(query)
        || brand.toLowerCase().trim().includes(query)
      ));
    }

    return allProducts;
  },
);

export const selectProductsByFilter = createSelector(
  [selectProductsBySearch, selectActiveFilter],
  (allProducts: Product[], filter: Filter) => {
    switch (filter) {
      case (Filter.None):
        return allProducts;

      case (Filter.Price): {
        return allProducts.slice().sort((a, b) => b.price - a.price);
      }

      case (Filter.Alphabetically): {
        return allProducts.slice()
          .sort((a, b) => a.title.localeCompare(b.title));
      }

      case (Filter.Brand): {
        return allProducts.slice()
          .sort((a, b) => a.brand.localeCompare(b.brand));
      }

      case (Filter.Rating): {
        return allProducts.slice()
          .sort((a, b) => b.rating - a.rating);
      }

      case (Filter.Stock): {
        return allProducts.slice()
          .sort((a, b) => b.stock - a.stock);
      }

      default:
        return allProducts;
    }
  },
);
