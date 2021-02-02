import React from "react";
import "./LandingPage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"

function LandingPage() {
  return (
    <div className="conatainer">
        <Header link1="SignIn" link2="SignUp" />
        <Footer/>
    </div>
  );
}

export default LandingPage;
