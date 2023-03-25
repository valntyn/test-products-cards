import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectProductsByFilter } from '../../app/selectors';
import { Banner } from '../../Components/Banner';
import { Cataloge } from '../../Components/Cataloge';
import { Dropdown } from '../../Components/Dropdown';
import { FormForNewItem } from '../../Components/Form';
import { Pagination } from '../../Components/Pagination';
import { Spinner } from '../../Components/Spinner';
import { getProducts } from '../../features/productSlice/productsSlice';
import { setVisibleProducts } from '../../features/visibleProductsSlice';
import { DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE } from '../../variables';
import './Homepage.scss';

export const Homepage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [searchParams] = useSearchParams();
  const { isLoad } = useAppSelector(state => state.products);
  const products = useSelector(selectProductsByFilter);
  const quantity = products.length;
  const currentPage = +(searchParams.get('page') || DEFAULT_PAGE);
  const itemsPerPage = +(searchParams.get('perPage') || DEFAULT_ITEMS_PER_PAGE);
  const totalPages = Math.ceil(quantity / itemsPerPage);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = products.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    dispatch(setVisibleProducts(currentItem));
  }, [quantity, currentPage, products]);

  if (isLoad) {
    return (
      <main className="homepage homepage__container">
        <Spinner />
      </main>
    );
  }

  return (
    <main className="homepage homepage__container">
      <Banner />
      <div className="homepage__grid">
        <Pagination
          currentPage={currentPage}
          total={totalPages}
        />
        <Dropdown
          total={quantity}
          defaultPage={DEFAULT_PAGE}
          itemsPerPage={itemsPerPage}
        />
        <Cataloge />
        <FormForNewItem />
      </div>
    </main>
  );
};
