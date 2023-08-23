import React from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Exports from "./components/Exports";
import Map from "./components/Map";
import Status from "./components/Status";
import Slick from "./components/Slick";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import Unique from "./components/Unique";
import ExploreCards from "./components/ExploreCards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stepperslide from "./components/Stepper";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <br />
      <br />
      <br />

      <Card />
      <br />
      <br />
      <br />
      <Exports />
      <br />
      <br />
      <Map />
      <br />
      <br />
      <Status />
      <br />
      <br />
      <Slick />
      <Testimonials />

      <Products />
      <br />
      <br />
      <Unique />

      <ExploreCards />
      <br />
      <br />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
