import React from "react";
import { Header, Menu, Dashboard, Footer } from "../../components/admin";

const Admin = () => {
  return (
    <div class="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Admin;
