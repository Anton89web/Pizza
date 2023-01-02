import React, {FC, useEffect, useState} from 'react';
import SkeletonMenu from "../SkeletonMenu";
import {fetchData} from "../../../Api/FetchProducts";
import DrinkCard from "./DrinkCard";

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
    console.log(drinks)


    return (
        <div className="single-offer-category-item isotope-item cat4">

            {loaded ? drinks.map((e: Drinks) => (
                    // @ts-ignore
                    <DrinkCard props={e} key={e.name}/>
                ))
                : [...new Array(6)].map((e, i) => <SkeletonMenu key={i}/>)
            }
        </div>
    );
};

export default DrinksMenu;