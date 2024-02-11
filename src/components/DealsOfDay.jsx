import CarouselIndicator from "./CarouselIndicator";
import DealsCard from "./DealsCard";
import SectionHeader from "./SectionHeader";

const DealsOfDay = () => {
    return (
        <div className="col-8 mx-auto my-5">
            <SectionHeader title={"Deals of The Day"} />;
            <div className="row mb-2">
                <div className="col-3">
                    <DealsCard />
                </div>
                <div className="col-3">
                    <DealsCard />
                </div>
                <div className="col-3">
                    <DealsCard />
                </div>
                <div className="col-3">
                    <DealsCard />
                </div>
            </div>
            <div className="my-5">
                <CarouselIndicator />
            </div>
        </div>
    );
};

export default DealsOfDay;
