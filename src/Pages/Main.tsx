import React, {FC} from 'react';

const Main: FC = () => {
    return (
        <div className="container-wrapper_main flex">
            <div className="container-wrapper_img"></div>
            <div className="main_title">Только у нас <br/> Лучшая
                <h1 className="main_subtitle">ПИЦЦА</h1>
            </div>
            <div id="rev_slider_1_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-source="gallery"
                 style={{"backgroundColor": "transparent", "padding": 0}}>

            </div>
        </div>
    )
};
export default Main;