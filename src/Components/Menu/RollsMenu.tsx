import React, {FC, useEffect, useState} from 'react';
import SkeletonMenu from "./SkeletonMenu";

interface Interface {
    ingr: string
    price: number
}

const RollsMenu: FC = () => {
    const [rolls, setRolls] = useState<[]>([])
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        fetch("https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/rolls")
            .then(res => res.json())
            .then(
                (res) => {
                    setRolls(res)
                    setLoaded(true)
                },
                (error: Error) => {
                    alert(error)
                }
            )
    }, [])

    return (
        <div className="single-offer-category-item isotope-item cat3">
            {loaded ?
                rolls.map((e: Interface) => (
                    <div className="single-offer-item" key={e.ingr}>
                        <div className="single-offer-details">
                            <div className="single-offer-title">{e.ingr}</div>
                            <div className="single-offer-content">
                                <p>Порция 3 - 9 шт</p>
                            </div>
                        </div>
                        <div className="single-offer-price">от {e.price} ₽</div>
                        <div className="clear"></div>
                    </div>
                ))
                : [...new Array(6)].map((e, i) => <SkeletonMenu key={i}/>)
            }

        </div>
    );
};

export default RollsMenu;