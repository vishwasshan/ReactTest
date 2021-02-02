import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import GridCardTwo from '../GridCards/GridCardTwo'

function Header() {
  const headerInfo={
     heading: "breaking Api",
     text: "The Breaking Bad API is a collection of information on the Vince "+
     "Gilligan series Breaking Bad, as well as his incredible spin-off "+
     "Better Call Saul. This site is designed to make it easy on the "+
     "developer to see what HTTP requests are possible, and what "+
     "information is available.",
     img : "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg"
  }
  return (
    <>
      <header className="header">
        <Nav link1="SignUp" to1="/signup" to2='/login' link2="LogIn" />
        <GridCardTwo info={headerInfo}/>
      </header>
    </>
  );
}

export default Header;
