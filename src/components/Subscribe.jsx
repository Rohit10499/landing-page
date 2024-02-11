import register from "../images/register.png";
const Subsscribe = () => {
    return (
        <div className="w-100 coupon-by-category-bg">
            <div className="mx-auto col-8 my-7 py-5">
                <div className="d-flex flex-row m-0 p-0 bg-white rounded-4">
                    <div className="w-50 rounded-4 text-center bg-light-grey p-0 m-0 m-2 ">
                        <img
                            src={register}
                            alt="..."
                            width={"365px"}
                            height={"365px"}
                        />
                    </div>
                    <div className="w-50  p-0 m-0 px-3 d-flex flex-column gap-3 justify-content-center">
                        <div className="subscribe-header w-75">
                            Subscribe to our Newsletter!
                        </div>
                        <div className="subscribe-header-secondary w-75">
                            Be the first to get exclusive offers ands the latest
                            news
                        </div>
                        <div className="w-100">
                            <input
                                type="text"
                                className="form-control bg-white form-label mb-0 p-3"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div>
                            <button className="btn btn-sm px-5 py-2 rounded-3 btn-danger">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Subsscribe;
