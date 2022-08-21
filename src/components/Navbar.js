import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>کتابخانه</h1>
      <h1>انجنیر حبیب الرحمن وقار</h1>
      <h1></h1>
      <p>اوس مهال تاسو په کتابخانه کي {books.length} کتابونه لري</p>
    </div>
  );
};

export default Navbar;
