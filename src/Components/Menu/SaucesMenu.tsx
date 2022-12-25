import React, {useEffect, useState} from 'react';
import SkeletonMenu from "./SkeletonMenu";

interface Souse {
    name: string
    ingr: string
    price: number
}

const SaucesMenu: React.FC = () => {
    const [souses, setSouses] = useState([])
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        fetch("https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/sauses")
            .then(res => res.json())
            .then(
                (res: []) => {
                    setSouses(res)
                    setLoaded(true)
                },
                (error: Error) => {
                    alert(error)
                }
            )
    }, [])

    return (
        <div className="single-offer-category-item isotope-item cat5">
            {loaded ? souses.map((e: Souse) => (
                    <div className="single-offer-item" key={e.name}>
                        <div className="single-offer-details">
                            <div className="single-offer-title">{e.name}</div>
                            <div className="single-offer-content">
                                <p>{e.ingr}</p>
                            </div>
                        </div>
                        <div className="single-offer-price">{e.price} ₽</div>
                        <div className="clear"></div>
                    </div>
                ))
                : [...new Array(6)].map((e, i) => <SkeletonMenu key={i}/>)
            }
        </div>
    )
};

export default SaucesMenu;