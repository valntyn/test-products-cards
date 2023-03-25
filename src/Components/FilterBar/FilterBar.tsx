import { useState, useEffect, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import { useAppDispatch } from '../../app/hooks';
import { setQuery } from '../../features/querySlice/querySlice';
import { getSearchWith } from '../../helplers/searchHelpers';
import './FilterBar.scss';

export const FilterBar = memo(
  () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const [search, setSearch] = useState(query);
    const dispatch = useAppDispatch();

    const debouncedOnChange = useDebouncedCallback((event) => {
      dispatch(setQuery(event.target.value));
    }, 500);

    const handleQuery
      = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);

        setSearchParams(
          getSearchWith(searchParams, {
            query: event.target.value || null,
            page: '1',
          }),
        );
      };

    useEffect(() => {
      dispatch(setQuery(query));
    }, []);

    return (
      <div className="filter">
        <label
          className="filter__box-input"
          htmlFor="input"
        >
          <button
            type="button"
            className="filter__input-button"
          >
            <div className="filter__input-img" />
          </button>
          <input
            id="input"
            type="text"
            className="filter__input"
            placeholder="Search in catalogue..."
            value={search}
            onChange={(e) => {
              handleQuery(e);
              debouncedOnChange(e);
            }}
            autoComplete="off"
          />
        </label>
      </div>
    );
  },
);
