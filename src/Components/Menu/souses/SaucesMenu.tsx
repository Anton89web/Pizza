import React, {useEffect, useState} from 'react';
import SkeletonMenu from "../SkeletonMenu";
import SouceCard from "./SouceCard";
import {fetchData} from "../../../Api/FetchProducts";

interface Souse {
    name: string
    ingr: string
    price: number
}

const SaucesMenu: React.FC = () => {
    const [souses, setSouses] = useState([])
    const [loaded, setLoaded] = useState(false)
    const path = "sauses"
    useEffect(() => {
        fetchData(path, setSouses, setLoaded)
    }, [])

    console.log(souses)


    return (
        <div className="single-offer-category-item isotope-item cat5">
            {loaded ? souses.map((e: Souse) => (
                    // @ts-ignore
                    <SouceCard props={e} key={e.id}/>
                ))
                : [...new Array(6)].map((e, i) => <SkeletonMenu key={i}/>)
            }
        </div>
    )
};

export default SaucesMenu;