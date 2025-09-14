import React from 'react';
import FilterBrand from './FilterBrand';
import FilterCategory from './FilterCategory';
import FilterColor from './FilterColor';
import FilterPrice from './FilterPrice';

const Filter = () => {
  return (
    <div>
      <FilterPrice></FilterPrice>
      <FilterBrand></FilterBrand>
      <FilterCategory></FilterCategory>
      <FilterColor></FilterColor>
    </div>
  );
};

export default Filter;