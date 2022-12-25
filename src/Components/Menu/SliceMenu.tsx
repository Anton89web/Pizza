import React, {useEffect, useState} from 'react';
import SkeletonMenu from "./SkeletonMenu";

interface Slice {
    id: string
    title: string
    ingredients: string
    slice_price: number
}

const SliceMenu: React.FC = () => {
    const [slice, setSlice] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch("https://6391e33cac688bbe4c55b334.mockapi.io/api/v1/pizzas")
            .then(res => res.json())
            .then(
                (res: []) => {
                    setSlice(res)
                    setLoaded(true)
                },
                (error: Error) => {
                    alert(error)
                }
            )
    }, [])

    return (
        <div className="single-offer-category-item isotope-item cat2">
            {loaded ?
                slice.map((e: Slice) => (
                    <div className="single-offer-item" key={e.id}>
                        <div className="single-offer-details">
                            <div className="single-offer-title">{e.title}</div>
                            <div className="single-offer-content">
                                <p>{e.ingredients}</p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <span className="page-title-icon flaticon-pizza-slice"></span>
                            <div className="single-offer-price" style={{width: 50}}>{e.slice_price} ₽</div>
                        </div>
                        <div className="clear"></div>
                    </div>
                ))
                : [...new Array(6)].map((e, i) => <SkeletonMenu key={i}/>)
            }
        </div>
    );
};

export default SliceMenu;