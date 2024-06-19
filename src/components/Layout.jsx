import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Layout = () => {
    return(
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}