import SectionHeader from "./SectionHeader";
import vector2 from "../images/vector2.png";
import vector1 from "../images/vector1.png";

const HowItWorks = () => {
    return (
        <div className="col-8 mx-auto py-5">
            <SectionHeader title={"How It Works?"} />
            <div className="row">
                <div className="col-4 position-relative">
                    <div class="position-absolute arrow-position-2">
                        <img src={vector1} alt="..." />
                    </div>
                    <div className="card custom-border rounded-4 mb-2 my-4 px-4">
                        <div className="card-body d-flex flex flex-column justify-content-center align-items-center text-center gap-3 ">
                            <div
                                className="py-2 px-3 bg-pink rounded-3 font-bold"
                                style={{ width: "fit-content" }}
                            >
                                <i class="bi bi-box-arrow-in-right fw-bold"></i>
                            </div>
                            <h5 className="p-0 how-it-works-title ">Signup</h5>
                            <p className="how-it-works-text pb-0">
                                If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4 position-relative">
                    <div class="position-absolute arrow-position">
                        <img src={vector2} alt="..." />
                    </div>
                    <div className="card custom-border rounded-4 mb-2 my-4 px-4">
                        <div className="card-body d-flex flex flex-column justify-content-center align-items-center text-center gap-3 ">
                            <div
                                className="py-2 px-3 bg-pink rounded-3 font-bold"
                                style={{ width: "fit-content" }}
                            >
                                <i class="bi bi-box-arrow-in-right fw-bold"></i>
                            </div>
                            <h5 className="p-0 how-it-works-title ">
                                Choose Coupon
                            </h5>
                            <p className="how-it-works-text pb-0">
                                If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card custom-border rounded-4 mb-2 my-4 px-4">
                        <div className="card-body d-flex flex flex-column justify-content-center align-items-center text-center gap-3 ">
                            <div
                                className="py-2 px-3 bg-pink rounded-3 font-bold"
                                style={{ width: "fit-content" }}
                            >
                                <i class="bi bi-credit-card-2-back  fw-bold"></i>
                            </div>
                            <h5 className="p-0 how-it-works-title ">
                                Grab Coupon
                            </h5>
                            <p className="how-it-works-text pb-0">
                                If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
