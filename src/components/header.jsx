import React from "react";
import logo from "../images/logo.png";

const Header = () => {
    return (
        <>
            <div className="w-100 py-3 d-flex mx-auto   gap-5">
                <div className="col-8 d-flex mx-auto justify-content-between flex-row align-items-center">
                    <img
                        src={logo}
                        width={"120px"}
                        height={"50px"}
                        alt="No Image"
                    />

                    <div className="form w-50">
                        <i className="bi bi-search text-dark"></i>
                        <input
                            type="text"
                            className="form-control form-label mb-0 form-input"
                            placeholder="Search For brand, category, coupon"
                        />
                    </div>
                    <button className="btn btn-sm btn-danger">
                        Login / Sign Up
                    </button>
                </div>
            </div>
            <div className="my-2 w-100 nav-bg-color text-white">
                <ul className="d-flex menu-text mx-auto flex-row justify-content-center align-items-center gap-4 mb-0">
                    <li className="px-2 py-3 menu-active">Home</li>
                    <li className="px-2 py-3">Deals</li>
                    <li className="px-2 py-3">Coupon</li>
                    <li className="px-2 py-3">Stores</li>
                    <li className="px-2 py-3">Contact us</li>
                </ul>
            </div>
        </>
    );
};

export default Header;
