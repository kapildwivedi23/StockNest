import React from "react";
import { Route, Routes } from "react-router-dom";
import Funds from "./Funds";
import Orders from "./Orders";
import Summary from "./Summary";
import OtherApps from "./OtherApps";
import Holdings from "./Holdings.jsx";
import WatchList from "./WatchList.jsx";
import Positions from "./Positions.jsx";
// import { GeneralContextProvider } from ".GeneralContextProvider"; // Add correct path if needed

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <WatchList/>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Summary />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/apps" element={<OtherApps />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;