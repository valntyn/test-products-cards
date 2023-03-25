import { useAppSelector } from '../../app/hooks';
import { selectedProducts }
  from '../../features/visibleProductsSlice/selectVisibleProducts';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';

export const ProductsList = () => {
  const visibleProducts = useAppSelector(selectedProducts);

  return (
    <ul className="productList">
      {visibleProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};
