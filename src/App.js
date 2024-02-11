import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Carousel from "./components/Carousel";
import CouponSection from "./components/CouponSection";
import DealsOfDay from "./components/DealsOfDay";
import CouponByCategory from "./components/CouponByCategory";
import Footer from "./components/Footer";
import PopularCategories from "./components/PopularCategories";
import PopularMembership from "./components/PopularMembership";
import DownloadBanner from "./components/DownloadBanner";
import HowItWorks from "./components/HowItWorks";
import Subsscribe from "./components/Subscribe";

function App() {
    return (
        <div className="container-fluid p-0 min-h-100 min-w-100">
            <Header />
            <Carousel />
            <CouponSection />
            <DealsOfDay />
            <CouponByCategory />
            <PopularMembership />
            <Subsscribe />
            <HowItWorks />
            <DownloadBanner />
            <PopularCategories />
            <Footer />
        </div>
    );
}

export default App;
