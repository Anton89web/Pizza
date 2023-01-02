import React, {FC, useEffect, useState} from 'react';
import SkeletonMenu from "../SkeletonMenu";
import {fetchData} from "../../../Api/FetchProducts";
import RollCard from "./RollCard";

interface Interface {
    id: number
    ingredients: string
    price: number
}

const RollsMenu: FC = () => {
    const [rolls, setRolls] = useState<[]>([])
    const [loaded, setLoaded] = useState(false)
    const path = "rolls"

    useEffect(() => {
        fetchData(path, setRolls, setLoaded)
    }, [])

    console.log(rolls)


    return (
        <div className="single-offer-category-item isotope-item cat3">
            {loaded ?
                rolls.map((e: Interface) => (
                    // @ts-ignore
                    <RollCard props={e} key={e.id}/>
                ))
                : [...new Array(6)].map((e, i) => <SkeletonMenu key={i}/>)
            }
        </div>
    )
}
export default RollsMenu;