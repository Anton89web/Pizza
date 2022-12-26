import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, setCategoryId} from "../redux/slices/filterSlice";

const Categories: React.FC = () => {
    const dispatch = useDispatch()
    const {categoryId} = useSelector((selectFilter))

    const arrCategory: string[] = [
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