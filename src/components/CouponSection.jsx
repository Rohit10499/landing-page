import CarouselIndicator from "./CarouselIndicator";
import CoupanCard from "./CoupanCard";

const CouponSection = () => {
    return (
        <div className="col-8 mx-auto my-5">
            <div className="text-center d-flex justify-content-center">
                <div className="coupon-tab coupon-active-tab">
                    <i className="bi bi-trophy"></i>
                    <span>Popular Coupons</span>
                </div>
                <div className="coupon-tab">
                    <i className="bi bi-stopwatch"></i>
                    <span>Ending Soon</span>
                </div>
                <div className="coupon-tab">
                    <i className="bi bi-fire"></i>
                    <span>Latest Coupons</span>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-3">
                    <CoupanCard />
                </div>
                <div className="col-3">
                    <CoupanCard />
                </div>
                <div className="col-3">
                    <CoupanCard />
                </div>
                <div className="col-3">
                    <CoupanCard />
                </div>
                <div className="col-3">
                    <CoupanCard />
                </div>
                <div className="col-3">
                    <CoupanCard />
                </div>
                <div className="col-3">
                    <CoupanCard />
                </div>
                <div className="col-3">
                    <CoupanCard />
                </div>
            </div>
            <div className="my-4">
                <CarouselIndicator />
            </div>
        </div>
    );
};
export default CouponSection;
