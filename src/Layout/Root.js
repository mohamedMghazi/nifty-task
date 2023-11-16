import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Styles/style.scss";

export default function Root() {
    return (
        <>
            <Outlet />
            <ToastContainer />
        </>
    )
}
