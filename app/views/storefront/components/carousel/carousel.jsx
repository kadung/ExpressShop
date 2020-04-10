import React from 'react';

const Carousel = (props) => {
    const slideshow = props.images.map((img, index) => {
        return (
            <div className={"carousel-item " + (!index? "active" : "")}>
                <img 
                    src={img.src}
                    alt={img.alt}
                    className="d-block w-100 h-100"
                />
            </div>
        )
    });
    const imageList = props.images.map((img, index) => {
        return <img 
                    src={img.src} 
                    className="img-thumbnail"
                    width="70"
                    height="50"
                    data-target="#carousel"
                    data-slide-to={index} />
    });
    
    return(
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {slideshow}
            </div>

            <div className="row pt-1 justify-content-center">
                {imageList}
            </div>
        </div>
    )
}

export default Carousel;