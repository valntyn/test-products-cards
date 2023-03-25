import { memo, useEffect, useState } from 'react';
import { PaginateLink } from '../PaginateLink';
import { SortLink } from '../SortLink/SortLink';
import './Dropdown.scss';

type PropTypes = {
  itemsPerPage: number;
  total: number;
  defaultPage: string;
};

export const Dropdown: React.FC<PropTypes> = memo(
  ({
    itemsPerPage,
    total,
    defaultPage,
  }) => {
    const [isOpenPage, setIsOpenPage] = useState(false);
    const [isOpenSort, setIsOpenSort] = useState(false);

    useEffect(() => {
      if (!isOpenPage && !isOpenSort) {
        return undefined;
      }

      const handleDocumentClick = () => {
        setIsOpenPage(false);
        setIsOpenSort(false);
      };

      document.addEventListener('click', handleDocumentClick);

      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, [isOpenPage, isOpenSort]);

    return (
      <div className="dropdown__sort-buttons">
        <div className="dropdown__sort-right">
          <div className="dropdown__dropdown-trigger">
            <button
              type="button"
              className="
                  dropdown__button-dropdown
                  dropdown__button-dropdown--right
              "
              onClick={() => {
                setIsOpenPage(current => !current);
              }}
            >
              <span className="dropdown__button-text">
                {itemsPerPage}
              </span>
              <span className="dropdown__button-text">
                Items on page
              </span>
              <img
                src="./assets/arr-down.svg"
                alt="dropdown"
                className="dropdown__drop-icon"
              />
            </button>
            {isOpenPage && (
              <ul className="dropdown__dropdown-content">
                {['6', '12', '20', 'All'].map(value => (
                  <li>
                    <PaginateLink
                      key={value}
                      value={value}
                      quantity={total}
                      defaultPage={defaultPage}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="dropdown__sort-right">
          <div className="dropdown__dropdown-trigger">
            <button
              type="button"
              className="
                  dropdown__button-dropdown
                  dropdown__button-dropdown--right
              "
              onClick={() => {
                setIsOpenSort(current => !current);
              }}
            >
              <span className="dropdown__button-text">
                Sort by
              </span>
              <img
                src="./assets/arr-down.svg"
                alt="dropdown"
                className="dropdown__drop-icon"
              />
            </button>
            {isOpenSort && (
              <ul className="dropdown__dropdown-content">
                {['Price', 'Stock', 'Alphabetically', 'Rating', 'Brand']
                  .map(value => (
                    <li>
                      <SortLink
                        key={value}
                        sort={value}
                        title={value}
                      />
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  },
);
