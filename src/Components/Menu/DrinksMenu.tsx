import React, {FC, useEffect, useState} from 'react';
import SkeletonMenu from "./SkeletonMenu";
import {fetchData} from "../../Api/FetchProducts";

interface Drinks {
    name: string
    price: number
}

const DrinksMenu: FC = () => {
    const [drinks, setDrinks] = useState<[]>([])
    const [loaded, setLoaded] = useState(false)
    const path = "drinks"

    useEffect(() => {
        fetchData(path, setDrinks, setLoaded)
    }, [])

    return (
        <div className="single-offer-category-item isotope-item cat4">

            {loaded ? drinks.map((e: Drinks) => (
                    <div className="single-offer-item" key={e.name}>
                        <div className="single-offer-details">
                            <div className="single-offer-title">{e.name}</div>
                            <div className="single-offer-content">
                                <p>0.5 литра</p>
                            </div>
                        </div>
                        <div className="single-offer-price">{e.price} ₽</div>
                        <div className="clear"></div>
                    </div>
                ))
                : [...new Array(6)].map((e, i) => <SkeletonMenu key={i}/>)
            }
        </div>
    );
};

export default DrinksMenu;