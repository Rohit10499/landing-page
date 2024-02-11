import logo from "../images/logo.png";
import apple from "../images/apple.png";
import play from "../images/play.png";
const Footer = () => {
    return (
        <div className="nav-bg-color py-2">
            <div className="mx-auto col-8  my-5">
                <div className="row d-flex gap-3">
                    <div className="col-3 text-white d-flex flex-column gap-4">
                        <img
                            width={"120px"}
                            height={"50px"}
                            src={logo}
                            alt="Your Image"
                        />
                        {/* <div class="overlay"></div> */}

                        <p className="footer-text">
                            Lorem Ipsum is simply dummy of the printing and type
                            setting.
                        </p>
                        <div
                            className="bg-white rounded-2 py-2 px-3"
                            style={{ width: "fit-content" }}
                        >
                            <div className="d-flex flex-row gap-2 align-items-center">
                                <img
                                    src={apple}
                                    width={"24px"}
                                    height={"24px"}
                                    alt="..."
                                />
                                <div className="d-flex flex-column align-items-start gap-1">
                                    <div className="button-text-2 ">
                                        Download From
                                    </div>

                                    <div className="button-text">APP STORE</div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-white rounded-2 py-2 px-3"
                            style={{ width: "fit-content" }}
                        >
                            <div className="d-flex flex-row gap-2 align-items-center">
                                <img
                                    src={play}
                                    width={"24px"}
                                    height={"24px"}
                                    alt="..."
                                />
                                <div className="d-flex flex-column align-items-start gap-1">
                                    <div className="button-text-2 ">
                                        Download From
                                    </div>

                                    <div className="button-text">
                                        PLAY STORE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <h5 className="footer-section-text text-red pt-4">
                            COMPANY
                        </h5>
                        <div className="footer-section-text text-white d-flex gap-4 mt-4 flex-column">
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">About Us</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Privacy Policy</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Terms</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Blogs</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Career</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <h5 className="footer-section-text text-red pt-4">
                            GENERAL
                        </h5>
                        <div className="footer-section-text text-white d-flex gap-4 mt-4 flex-column">
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Partner With us</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Write to us</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Mobile App</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Site Map</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <h5 className="footer-section-text text-red pt-4">
                            PAGES
                        </h5>
                        <div className="footer-section-text text-white d-flex gap-4 mt-4 flex-column">
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Amazon Offer</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Google Pay Offers</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">PayPal Offers</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">PhonePe Offers</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Festival Offers</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0"> Bank Offers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <h5 className="footer-section-text text-red pt-4">
                            MORE
                        </h5>
                        <div className="footer-section-text text-white d-flex gap-4 mt-4 flex-column">
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">City Offers</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Brand Offers</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Product Deals</p>
                            </div>
                            <div className="d-flex text-start flex-row gap-1">
                                <i class="bi bi-caret-right-fill"></i>
                                <p className="p-0 m-0">Girf Cards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
