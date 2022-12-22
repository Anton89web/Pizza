import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, setCategoryId} from "../redux/slices/filterSlice";

const Categories = () => {
  const dispatch = useDispatch()
  const {categoryId} = useSelector(state => (selectFilter))

  // function changeCategoryID(id) {
  //   dispatch(setCategoryId(id))
  // }


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
          onClick={() => dispatch(setCategoryId(i))}
          className={(i === categoryId) ? "active" : ""}>{category}</li>
      ))}
    </ul>
  );
};

export default Categories;