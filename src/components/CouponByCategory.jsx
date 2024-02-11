import SectionHeader from "./SectionHeader";
import fashion from "../images/fashion.png";
import amazon from "../images/amazon.png";
import food from "../images/food.png";
import beauty from "../images/beauty.png";
import toys from "../images/toys.png";
import cloud from "../images/cloud.png";
import gaming from "../images/gaming.png";
import phones from "../images/phones.png";
import travel from "../images/travel.png";
import movies from "../images/movies.png";
import CarouselIndicator from "./CarouselIndicator";

const CouponByCategory = () => {
    return (
        <div className="w-100 coupon-by-category-bg">
            <div className="col-8 mx-auto py-5">
                <SectionHeader title={"Coupon By Categories"} />
                <div className="row gap-1 my-5">
                    <div className="col rounded-top custom-red-border bg-white text-center px-4 py-3">
                        <img
                            src={fashion}
                            alt="..."
                            width={"36px"}
                            height={"36px"}
                        />
                        <div className="button-text my-2">Fashion</div>
                    </div>
                    <div className="col rounded-top custom-transparent-border bg-white text-center px-4 py-3">
                        <img
                            src={food}
                            alt="..."
                            width={"36px"}
                            height={"36px"}
                        />
                        <div className="button-text my-2">Food</div>
                    </div>
                    <div className="col rounded-top custom-transparent-border bg-white text-center px-4 py-3">
                        <img
                            src={fashion}
                            alt="..."
                            width={"36px"}
                            height={"36px"}
                        />
                        <div className="button-text my-2">Beauty</div>
                    </div>
                    <div className="col rounded-top custom-transparent-border bg-white text-center px-4 py-3">
                        <img
                            src={toys}
                            alt="..."
                            width={"36px"}
                            height={"36px"}
                        />
                        <div className="button-text my-2">Toys</div>
                    </div>
                    <div className="col rounded-top custom-transparent-border bg-white text-center px-4 py-3">
                        <img
                            src={cloud}
                            alt="..."
                            width={"36px"}
                            height={"36px"}
                        />
                        <div className="button-text my-2">Cloud</div>
                    </div>
                    <div className="col rounded-top custom-transparent-border bg-white text-center px-4 py-3">
                        <img
                            src={gaming}
                            alt="..."
                            width={"36px"}
                            height={"36px"}
                        />
                        <div className="button-text my-2">Gaming</div>
                    </div>
                    <div className="col rounded-top custom-transparent-border bg-white text-center px-4 py-3">
                        <img
                            src={phones}
                            alt="..."
                            width={"36px"}
                            height={"36px"}
                        />
                        <div className="button-text my-2">Phones</div>
                    </div>
                    <div className="col rounded-top custom-transparent-border bg-white text-center px-4 py-3">
                        <img
                            src={travel}
                            alt="..."
                            width={"36px"}
                            height={"36px"}
                        />
                        <div className="button-text my-2">Travel</div>
                    </div>
                    <div className="col rounded-top custom-transparent-border bg-white text-center px-4 py-3">
                        <img
                            src={movies}
                            alt="..."
                            width={"36px"}
                            height={"36px"}
                        />
                        <div className="button-text my-2">Movies</div>
                    </div>
                    <div className="col-12 rounded-bottom-4 row bg-white p-0 m-0 py-5">
                        <div className="col-3">
                            <div className="card border-0">
                                <div className="card-body d-flex flex flex-column gap-3 ">
                                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                                        <img
                                            src={amazon}
                                            alt="..."
                                            width={"80px"}
                                            height={"24px"}
                                        />

                                        <p className="deals-card-text p-0 m-0 text-center">
                                            Amazon
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="p-0 deals-card-offer">
                                            Flat 30% off
                                        </h5>
                                        <button
                                            type="button"
                                            class="btn btn-danger rounded-2 py-2 btn-sm w-100 btn-block"
                                        >
                                            GRAB NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card border-0">
                                <div className="card-body d-flex flex flex-column gap-3 ">
                                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                                        <img
                                            src={amazon}
                                            alt="..."
                                            width={"80px"}
                                            height={"24px"}
                                        />

                                        <p className="deals-card-text p-0 m-0 text-center">
                                            Amazon
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="p-0 deals-card-offer">
                                            Flat 30% off
                                        </h5>
                                        <button
                                            type="button"
                                            class="btn btn-danger rounded-2 py-2 btn-sm w-100 btn-block"
                                        >
                                            GRAB NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card border-0">
                                <div className="card-body d-flex flex flex-column gap-3 ">
                                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                                        <img
                                            src={amazon}
                                            alt="..."
                                            width={"80px"}
                                            height={"24px"}
                                        />

                                        <p className="deals-card-text p-0 m-0 text-center">
                                            Amazon
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="p-0 deals-card-offer">
                                            Flat 30% off
                                        </h5>
                                        <button
                                            type="button"
                                            class="btn btn-danger rounded-2 py-2 btn-sm w-100 btn-block"
                                        >
                                            GRAB NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card border-0">
                                <div className="card-body d-flex flex flex-column gap-3 ">
                                    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                                        <img
                                            src={amazon}
                                            alt="..."
                                            width={"80px"}
                                            height={"24px"}
                                        />

                                        <p className="deals-card-text p-0 m-0 text-center">
                                            Amazon
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="p-0 deals-card-offer">
                                            Flat 30% off
                                        </h5>
                                        <button
                                            type="button"
                                            class="btn btn-danger rounded-2 py-2 btn-sm w-100 btn-block"
                                        >
                                            GRAB NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 pb-0 pt-5">
                            <CarouselIndicator />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponByCategory;
