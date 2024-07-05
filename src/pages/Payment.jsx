import React from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Footer from "../components/footer";

function Payment() {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <Nav1 />
      </div>
      <div className="w-[100%] h-[0.4px] bg-gray-300 mx-auto"></div>
      <div className="w-[90%] mx-auto">
        <Nav2 />
      </div>
      <div className="w-[100%] h-[0.3px] bg-gray-300 mx-auto"></div>

      <div className="text-center text-[40px] mt-20 font-semibold text-red-600 ">Payment Gateway will be available soon ...</div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Payment;
