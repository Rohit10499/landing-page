import weekend from "../images/weeken.png";
import SectionHeader from "./SectionHeader";

const PopularCategories = () => {
    return (
        <div className="mx-auto col-8 py-5 my-5">
            <div className="row m-0 p-0 rounded">
                <div className="col-3 p-0">
                    <img
                        src={weekend}
                        alt="..."
                        className="overflow-hidden  rounded-start-4 d-block w-100"
                    />
                </div>
                <div className="col-9 px-3 py-1 bg-white rounded-end-4">
                    <SectionHeader start={true} title={"Popular Categories"} />

                    <div className="row border m-0 p-0 mt-2 rounded-2">
                        <div className="col-3 p-2 text-center border-bottom">
                            Flight
                        </div>
                        <div className="col-3 p-2 text-center border-start border-bottom">
                            Bus
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Entertainment
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Jwellery
                        </div>
                        <div className="col-3 p-2 text-center  border-bottom">
                            Medicine
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Hosting
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Flowers
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Beauty
                        </div>
                        <div className="col-3 p-2 text-center   border-bottom">
                            OTT
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Bills
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Kids
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Travel
                        </div>
                        <div className="col-3 p-2 text-center border-bottom">
                            Food
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Eyewear
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Lifestyle
                        </div>
                        <div className="col-3 p-2 text-center border-start  border-bottom">
                            Kitchen
                        </div>
                        <div className="col-3 p-2 text-center border-bottom">
                            Recharge
                        </div>
                        <div className="col-3 p-2 text-center border-start border-bottom">
                            Electronics
                        </div>
                        <div className="col-3 p-2 text-center border-start border-bottom">
                            Hotel
                        </div>
                        <div className="col-3 p-2 text-center border-start border-bottom">
                            Footwear
                        </div>
                        <div className="col-3 p-2 text-center border-bottom">
                            Lab
                        </div>
                        <div className="col-3 p-2 text-center border-start border-bottom">
                            Education
                        </div>
                        <div className="col-3 p-2 text-center border-start border-bottom">
                            Services
                        </div>
                        <div className="col-3 p-2 text-center border-start border-bottom">
                            Furniture
                        </div>
                        <div className="col-3 p-2 text-center">Fashion</div>
                        <div className="col-3 p-2 text-center border-start">
                            Pizza
                        </div>
                        <div className="col-3 p-2 text-center border-start">
                            Bike
                        </div>
                        <div className="col-3 p-2 text-center border-start">
                            Nobilities
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;
