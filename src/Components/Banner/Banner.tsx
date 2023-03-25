import React from 'react';
import { Link } from 'react-router-dom';

export const Banner = React.memo(
  () => {
    return (
      <div className="homepage__banner-box">
        <Link to="/home">
          <img
            className="homepage__banner"
            src="./assets/banner.png"
            alt="products-banner"
          />
        </Link>
      </div>
    );
  },
);
