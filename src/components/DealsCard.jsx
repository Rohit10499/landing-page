import amazon from "../images/amazon.png";
const DealsCard = () => {
    return (
        <div className="card custom-border mb-2 my-4 px-4">
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
                    <h5 className="p-0 deals-card-offer">Flat 30% off</h5>
                    <button
                        type="button"
                        class="btn btn-danger rounded-2 py-2 btn-sm w-100 btn-block"
                    >
                        GRAB NOW
                    </button>
                </div>
            </div>
        </div>
    );
};
export default DealsCard;
