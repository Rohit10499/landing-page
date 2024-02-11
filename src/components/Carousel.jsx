import offer from "../images/offer.png";
import CarouselIndicator from "./CarouselIndicator";

const Carousel = () => {
    return (
        <div className="col-8 mx-auto my-5">
            <div className="position-relative">
                <img
                    src={offer}
                    className="d-block w-100 rounded-5"
                    style={{
                        objectFit: "none",
                        height: "468px",
                    }}
                    alt="..."
                />
            </div>

            {/* <div id="carouselExampleIndicators" className="carousel slide w-75">
                <div className="carousel-inner py-3  px-6">
                    <div className="carousel-item active"></div>
                </div>
            </div> */}
            <div className="mt-4">
                <CarouselIndicator />
            </div>
        </div>
    );
};
export default Carousel;
