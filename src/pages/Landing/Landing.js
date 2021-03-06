import * as React from "react";
import Header from "../../components/navigation/Header";
import Footer from "../../components/navigation/Footer";
import ComingSoon from "./ComingSoon";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";

function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <ComingSoon />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
