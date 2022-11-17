import React from "react";
import {
  Navbar,
  Home,
  Bookcontainer,
  // CategoriesContainer,
  Footer,
} from "../../components/client";

const home = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Bookcontainer />
      <Footer />
    </>
  );
};

export default home;
