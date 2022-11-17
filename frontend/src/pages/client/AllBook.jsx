import React from "react";
import { Navbar, Bookcontainer } from "../../components/client";

const AllBook = () => {
  return (
    <div>
      <Navbar />;
      <div className="bg-all-books">
        <div style={{ marginTop: "-60px" }}>
          <h1 className="title__all-book">All Books Collection</h1>
        </div>
        <Bookcontainer />
      </div>
    </div>
  );
};

export default AllBook;
