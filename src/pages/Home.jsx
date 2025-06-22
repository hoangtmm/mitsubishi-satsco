import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/login" className="text-red-500">
        Qua trang login
      </Link>
    </div>
  );
};

export default Home;
