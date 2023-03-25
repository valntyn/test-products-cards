import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../helplers/searchHelpers';
import { DEFAULT_PAGE } from '../../variables';
import './PaginateLink.scss';

type PropTypes = {
  value: string;
  quantity?: number;
};

export const PaginateLink: React.FC<PropTypes> = ({
  value,
  quantity,
}) => {
  const [searchParams] = useSearchParams();

  const isAll = value === 'All';

  const getSearchWithItemsPerPage = (itemsPerPage: string) => {
    if (isAll) {
      return getSearchWith(searchParams, {
        page: DEFAULT_PAGE,
        perPage: `${quantity}`,
      });
    }

    if (itemsPerPage && !isAll) {
      return getSearchWith(searchParams, {
        page: DEFAULT_PAGE,
        perPage: itemsPerPage,
      });
    }

    return getSearchWith(searchParams, {
      perPage: null,
    });
  };

  return (
    <Link
      className="paginate"
      to={{
        search: getSearchWithItemsPerPage(value),
      }}
    >
      {value}
    </Link>
  );
};
