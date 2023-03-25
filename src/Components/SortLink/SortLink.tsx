import { Link, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { changeFilter } from '../../features/FilterSlice/filterSlice';
import { getSearchWith } from '../../helplers/searchHelpers';
import { DEFAULT_PAGE } from '../../variables';

type PropTypes = {
  sort: string;
  title: string;
};

export const SortLink: React.FC<PropTypes> = ({
  title,
  sort,
}) => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const getSearchWithItemsPerPage = (sortBy: string) => {
    const fixedSort = sortBy.toLowerCase();

    return getSearchWith(searchParams, {
      page: DEFAULT_PAGE,
      sort: fixedSort,
    });
  };

  const handleClick = (sortType: string) => () => {
    dispatch(changeFilter(sortType));
  };

  return (
    <Link
      className="paginate"
      to={{
        search: getSearchWithItemsPerPage(sort),
      }}
      onClick={handleClick(sort)}
    >
      {title}
    </Link>
  );
};
