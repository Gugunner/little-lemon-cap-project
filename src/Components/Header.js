import React from "react";
import "../styles/header.css";
import Nav from "./Nav";

import { HorizontalLayout } from "./HorizontalLayout";

function LittleLemonLogo() {
  return (
    <img
      className="outline"
      src="/assets/images/Logo.svg"
      alt="Little Lemon Restaurant Logo"
    />
  );
}

function SideMenu() {
  return <img src="/assets/svgs/hamburger_menu.svg" alt="Hamburger icon" />;
}

function Basket() {
  return (
    <img src="/assets/svgs/basket.svg" alt="Basket icon for online delivery" />
  );
}

function MobileHeader() {
  return (
    <>
      <SideMenu />
      <LittleLemonLogo />
      <Basket />
    </>
  );
}

function DesktopHeader() {
  return (
    <>
      <LittleLemonLogo />
      <Nav />
      <Basket />
    </>
  );
}

export default function Header() {
  return (
    <header className="navigation-bar constrain-content outline">
      <div className="flex-row justify-between full-height center-items outline ">
        <HorizontalLayout>
          <DesktopHeader />
          <MobileHeader />
        </HorizontalLayout>
      </div>
    </header>
  );
}
