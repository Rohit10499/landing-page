import sunglass from "../images/sunglass.png";
import sale3 from "../images/sale3.png";
import sale2 from "../images/sale2.png";
import sale1 from "../images/sale1.png";
import amazon from "../images/amazon.png";
import SectionHeader from "./SectionHeader";
import CarouselIndicator from "./CarouselIndicator";
import DealsCard from "./DealsCard";

const PopularMembership = () => {
    return (
        <div className="my-5">
            <div className="mx-auto col-8 ">
                <img
                    src={sunglass}
                    className="d-block w-100 rounded"
                    alt="..."
                />
                <div className="my-5">
                    <SectionHeader title={"Popular Membership"} />
                </div>
                <div className="row m-0 p-0">
                    <div className="col-6 mb-4">
                        <img
                            src={sale1}
                            alt="..."
                            className="w-100"
                            height={"420px"}
                        />
                    </div>
                    <div class="col-6 mb-4">
                        <div class="bg-image w-100 h-100 position-relative">
                            <div class="content bg-white my-5 mx-3 rounded-1">
                                <div className="row m-0 p-0">
                                    <div className="col-6 m-0 p-0">
                                        <div className="card custom-border rounded-0 px-4">
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
                                    <div className="col-6 m-0 p-0">
                                        <div className="card custom-border rounded-0 px-4">
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
                                    <div className="col-6 m-0 p-0">
                                        <div className="card custom-border rounded-0 px-4">
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
                                    <div className="col-6 m-0 p-0">
                                        <div className="card custom-border rounded-0 px-4">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img
                            src={sale2}
                            alt="..."
                            className="w-100"
                            height={"420px"}
                        />
                    </div>
                    <div className="col-6">
                        <img
                            src={sale3}
                            alt="..."
                            className="w-100"
                            height={"420px"}
                        />
                    </div>
                </div>
                <div className="my-5">
                    <CarouselIndicator />
                </div>
            </div>
        </div>
    );
};

export default PopularMembership;
