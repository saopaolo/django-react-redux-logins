import React from "react";
import "./WelcomePage.css";
import { CssBaseline } from "@mui/material";
import WelcomePageHeader from "../components/WelcomePageHeader";
import WelcomePageFooter from "../components/WelcomePageFooter";

function WelcomePage() {
  return (
    <div className="background__image">
      <CssBaseline />
      <WelcomePageHeader />
      <WelcomePageFooter />
    </div>
  );
}

export default WelcomePage;
