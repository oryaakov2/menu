import React from 'react';

const Categories = (props) => {

  return (
    <div className='btn-container'>
      {props.categories.map((category, index) => (
        <button key={index} type="button" className='filter-btn' onClick={() => {props.filterItems(category)}}>
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories;
