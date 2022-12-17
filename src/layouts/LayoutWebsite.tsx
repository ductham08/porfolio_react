import React from "react";
import { Outlet } from "react-router-dom";
import Footer_user from "../components/Footer_user";
import Header_user from "../components/Header_user";

type Props = {};

const LayoutWebsite = (props: Props) => {
    return (
        <div>
            <div className="header_user">
                <Header_user />
            </div>
            <main>
                <Outlet />
            </main>
            <div className="footer">
                <Footer_user />
            </div>
        </div>
    );
};

export default LayoutWebsite;
