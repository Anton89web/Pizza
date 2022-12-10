import React from 'react';

const Sort = ({setPopup, popup, setNameSort, setActive, active}) => {

  const list = [
    "популярности ↑",
    "популярности ↓",
    "цене ↑",
    "цене ↓",
    "алфавиту ↑",
    "алфавиту ↓",
  ]


  function changePopup(i) {
    setActive(i)
    setPopup(!popup)
    setNameSort(list[i])
  }


  return (
    <div className="sort__popup">
      <ul>
        {list.map((sort, index) => (
          <li
            key={sort}
            onClick={() => changePopup(index)}
            className={(active === index) ? "active" : ""}>{list[index]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;