import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Nav1() {
  const navigate = useNavigate();
  const num = useSelector((state) => state.cart.cartLength);

  const handleSignout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div className="flex justify-between items-center w-full p-2 px-4 bg-gray-50 text-gray-800 text-[13px]">
      {/* Left section */}
      <div className="flex space-x-4 items-center">
        {localStorage.getItem("user") === null ? (
          <div>
            Hi!{" "}
            <span
              className="text-blue-600 cursor-pointer underline"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </span>{" "}
            or{" "}
            <span
              className="text-blue-600 cursor-pointer underline"
              onClick={() => navigate("/register")}
            >
              register
            </span>
          </div>
        ) : (
          <div
            className="text-red-600 cursor-pointer underline font-semibold text-sm"
            onClick={handleSignout}
          >
            Signout
          </div>
        )}

        {/* Hidden on small screens */}
        <div className=" max-sm:hidden cursor-pointer">Daily Deals</div>
        <div className=" max-sm:hidden cursor-pointer">Help & Contact</div>
      </div>

      {/* Right section */}
      <div className="flex space-x-4 items-center">
        {/* Hidden on small screens */}
        <div className=" max-sm:hidden cursor-pointer">Sell</div>
        <div className=" max-sm:hidden gap-1 items-center cursor-pointer">
          <p>Watchlist</p> <MdKeyboardArrowDown fontSize={20} />
        </div>
        <div className=" max-sm:hidden cursor-pointer">MyEbay</div>

        {/* Always visible */}
        <div className="cursor-pointer">
          <IoMdNotifications className="text-xl" />
        </div>
        <div className="relative cursor-pointer">
          <div className="absolute w-5 h-5 text-center top-[-8px] left-[93%] -translate-x-1/2 rounded-full bg-red-400 text-white">
            {num}
          </div>
          <FaShoppingCart className="text-xl" onClick={() => navigate("/cart")} />
        </div>
      </div>
    </div>
  );
}

export default Nav1;
