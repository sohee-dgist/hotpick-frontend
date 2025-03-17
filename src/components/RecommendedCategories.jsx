import React from 'react';
import categoriesData from '../data/categoriesData';

const RecommendedCategories = () => {
  const categoriesToShow = categoriesData.data.slice(0, 6);

  return (
    <div className="flex justify-center mb-4 space-x-4">
      {categoriesToShow.map((category) => (
        <a
          key={category.id}
          // href={category.path}
          className="px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          {category.displayName}
        </a>
      ))}
    </div>
  );
};

export default RecommendedCategories;