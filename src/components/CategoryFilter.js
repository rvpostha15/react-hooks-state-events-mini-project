import React from "react";

function CategoryFilter({categories, handleCategorySelect, selectedCategory}) {
  

  const categoryBtn = categories.map((category)=> (
    <button 
      className={category===selectedCategory ? 'selected' : null}
      key={category}
      onClick={()=>handleCategorySelect(category)}
    >{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtn}
    </div>
  );
}

export default CategoryFilter;
