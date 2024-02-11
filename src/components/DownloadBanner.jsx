import iphone from "../images/iphone.png";
import apple from "../images/apple.png";
import play from "../images/play.png";

const DownloadBanner = () => {
    return (
        <div className="col-8 mx-auto">
            <div className="row bg-pink rounded-4 m-0 p-0">
                <div className="col-6 my-auto">
                    <div className="d-flex flex-column gap-4 px-5 align-items-start justify-content-center">
                        <div className="download-card-title">
                            Want to be a part of our team
                        </div>
                        <div className="download-card-text">
                            Be a part of best site of discount coupons
                        </div>
                        <div className="d-flex justofy-space-between gap-4">
                            <div
                                className="bg-white rounded-2 py-3 px-4"
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

                                        <div className="button-text">
                                            APP STORE
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bg-white rounded-2 py-3 px-4"
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
                    </div>
                </div>
                <div className="col-6 d-flex flex-row p-5 mx-auto rounded-4 position-relative overflow-hidden">
                    <div className="px-5">
                        <img
                            src={iphone}
                            className="phone"
                            width={"144px"}
                            height={"294px"}
                            alt=""
                        />
                    </div>
                    <div className="position-absolute phone2-position">
                        <img
                            src={iphone}
                            className="phone2"
                            width={"195px"}
                            height={"395px"}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DownloadBanner;
