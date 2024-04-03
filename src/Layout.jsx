import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      {/* using <Outlet /> we can change only things in the outlet . Header and Footer will remain same for all pages */}
      <Outlet />  
      {/* NESTING --->> WE DID NESTING IN MAIN.JSX FILE */}
      <Footer />
    </>
  );
}

export default Layout;
