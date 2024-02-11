const CarouselIndicator = () => {
    return (
        <div className="d-flex justify-content-center gap-2">
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="indicator-active"
                aria-current="true"
                aria-label="Slide 1"
            ></button>
            <button
                type="button"
                className="indicator-inactive"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
            ></button>
            <button
                type="button"
                className="indicator-inactive"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
            ></button>
        </div>
    );
};

export default CarouselIndicator;
