import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, setSortIndex, setSortName} from "../redux/slices/filterSlice";


// @ts-ignore
const Sort: FC = ({setPopup, popup}) => {
    const dispatch = useDispatch()
    const {sortIndex} = useSelector(selectFilter)

    const list: string[] = [
        "популярности ↑",
        "популярности ↓",
        "цене ↑",
        "цене ↓",
        "алфавиту ↑",
        "алфавиту ↓",
    ]

    function changePopup(i: number) {
        dispatch(setSortIndex(i))
        dispatch(setSortName(list[i]))
        setPopup(!popup)
    }


    return (
        <div className="sort__popup">
            <ul>
                {list.map((sort, index) => (
                    <li
                        key={sort}
                        onClick={() => changePopup(index)}
                        className={(sortIndex === index) ? "active" : ""}>{list[index]}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sort;