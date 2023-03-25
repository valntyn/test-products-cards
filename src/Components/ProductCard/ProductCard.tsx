import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { removeProduct } from '../../features/productSlice/productsSlice';
import { Product } from '../../types/Product';
import './ProductCard.scss';

type PropTypes = {
  product: Product
};

export const ProductCard: React.FC<PropTypes> = ({ product }) => {
  const {
    price,
    discountPercentage,
    title,
    stock,
    thumbnail,
    rating,
    brand,
    id,
  } = product;

  const dispatch = useAppDispatch();

  const fixedPrice = (price - (price / 100) * discountPercentage).toFixed();

  const handleClickDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    currentId: number,
  ) => {
    e.stopPropagation();

    dispatch(removeProduct(currentId));
  };

  return (
    <li className="card">
      <button
        type="button"
        className="card__button-delete"
        onClick={(e) => handleClickDelete(e, id)}
      >
        <div className="card__cross" />
      </button>
      <Link
        to={`/${id}`}
      >
        <div className="card__img-box">
          <img
            src={thumbnail}
            alt="product-card"
            className="card__img"
          />
        </div>
      </Link>
      <div className="card__wrapper">
        <div className="card__information">
          <h6 className="card__name">{title}</h6>
        </div>
        <div className="card__price">
          <h2 className="card__price-amount">
            {`$${fixedPrice}`}
          </h2>
          <p className="card__price-amount--old">
            {`$${price}`}
          </p>
        </div>
        <div className="card__desc">
          <div className="card__box-left">
            <p className="card__desc-title">Brand</p>
            <p className="card__desc-title">Rating</p>
            <p className="card__desc-title">Stock</p>
          </div>
          <div className="card__box-right">
            <p className="card__desc-char">{brand}</p>
            <p className="card__desc-char">{rating}</p>
            <p className="card__desc-char">{stock}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
