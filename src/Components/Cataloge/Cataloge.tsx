/* eslint-disable no-console */
import { FilterBar } from '../FilterBar';
import { ProductsList } from '../ProductsList';

export const Cataloge = () => {
  return (
    <div className="cataloge">
      <FilterBar />
      <ProductsList />
    </div>
  );
};
