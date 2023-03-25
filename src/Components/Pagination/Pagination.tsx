import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../helplers/searchHelpers';
import { LabelLink } from '../LabelLink';
import './Pagination.scss';

type PropTypes = {
  total: number;
  currentPage: number;
};

export const Pagination: React.FC<PropTypes> = ({ total, currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (newPage: number) => {
    setSearchParams(
      getSearchWith(searchParams, { page: `${newPage}` || null }),
    );
  };

  return (
    <ReactPaginate
      containerClassName="pagination pagination__position"
      previousLinkClassName="pagination__item"
      nextLinkClassName="pagination__item"
      pageLinkClassName="pagination__item"
      breakLinkClassName="pagination__item"
      activeLinkClassName="pagination__item--active"
      disabledClassName="pagination__item--disabled"
      marginPagesDisplayed={1}
      forcePage={+currentPage - 1}
      pageRangeDisplayed={6}
      previousLabel={
        <LabelLink currentPage={currentPage} value="<" />
      }
      nextLabel={
        <LabelLink currentPage={currentPage} value=">" />
      }
      onPageChange={(data) => handleClick(data.selected + 1)}
      breakLabel="..."
      pageCount={total}
    />
  );
};
