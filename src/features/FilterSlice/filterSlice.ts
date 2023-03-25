import { createSlice } from '@reduxjs/toolkit';
import { Filter } from '../../types/Filter';

const initialState: Filter = Filter.None;

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (_, action) => action.payload,
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
