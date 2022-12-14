import React from 'react';

const Categories = ({index, setIndex}) => {

  const arrCategory = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ]
  return (
    <ul>
      {arrCategory.map((category, i) => (
        <li
          key={category}
          onClick={() => setIndex(i)}
          className={(i === index) ? "active" : ""}>{category}</li>
      ))}
    </ul>
  );
};

export default Categories;