import amazon from "../images/amazon.png";
const CoupanCard = () => {
    return (
        <div className="card custom-border mb-2 my-4">
            <div className="card-body d-flex flex-column gap-4 justify-content-center align-items-center">
                <h5 className="p-0 coupan-card-header">
                    Upto 60% off on Appliances
                </h5>
                <img src={amazon} alt="..." width={"80px"} height={"24px"} />
                <p className="coupan-card-text p-0 m-0 text-center">
                    Upto 60% off on summer Appliances
                </p>
                <button
                    type="button"
                    class="btn btn-danger mt-3 rounded-2 py-2 btn-sm w-100 btn-block"
                >
                    GRAB NOW
                </button>
            </div>
        </div>
    );
};
export default CoupanCard;
