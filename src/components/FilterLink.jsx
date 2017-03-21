import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, className, children }) => (
  <Link className={className}
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

export default FilterLink;
