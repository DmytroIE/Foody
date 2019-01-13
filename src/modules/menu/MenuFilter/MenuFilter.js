import React from 'react';

const MenuFilter = props => {
  const { value, categories, onChange, onClear } = props;

  return (
    <>
      <select value={value} onChange={onChange}>
        <option key={-1} value="">
          All
        </option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="button" onClick={onClear}>
        Очистить
      </button>
    </>
  );
};

export default MenuFilter;
