import React from "react";
import Navbar from "../components/Navbar";
import SliderImg from "../components/SliderImg";
import Explore from "../components/Explore";
import Footer from "../components/footer";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { setCategory } from '../features/category/CategorySlice';


function Home() {
  const navigate  =useNavigate()
  const dispatch = useDispatch() 

  

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate("/exploreProducts")
  };

  return (
    <div className=" w-full mx-auto">
      <div>
        <Navbar />
      </div>
      <div className="w-[90%] mx-auto">
        <SliderImg />
      </div>

      <div className="w-[86%] mx-auto bg-gray-200 py-3 px-4 mt-5 flex flex-col md:flex-row justify-between items-center rounded-md">
  <div className="text-center md:text-left mb-3 md:mb-0 md:mr-3">
    <div className="text-2xl font-bold mb-2">
      Feel special this summer with 15% off*
    </div>
    <div className="text-base font-semibold ">
      Save on luxury jewelry, watches and handbags for you.{" "}
      <span className="ml-2">|</span>{" "}
      <span className="ml-3 underline cursor-pointer">
        *Min. spend $300. Max. discount $100
      </span>
    </div>
  </div>

  <div className="text-center w-[20%] max-md:w-[50%] md:text-right">
  <div className="text-lg  text-center py-1 px-2 mt-2 md:mt-0 w-full md:w-[60%] sm:w-full max-md:p-0 max-md:text-sm rounded-full max-md:rounded-lg border-[1px] border-black hover:bg-red-950 hover:text-yellow-400 transition-colors duration-400 cursor-pointer"
    onClick={() => handleCategoryClick('Womens Fashions')}>
      CODE: LUXUS15
    </div>
  </div>
</div>
      <div className="w-[90%] mx-auto mt-10">
        <Explore />
      </div>
<div className="flex items-center bg-yellow-400 mt-5">
      <div className="w-full md:w-1/3 max-md:mb-2 flex flex-col gap-4 md:ml-8 md:mt-4 md:mr-4">
    <div className="text-xl md:text-3xl font-bold leading-tight text-red-950">
      Growing your collection? We’ve got your back
    </div>
    <div className="text-base">
      You’re protected by the eBay Money Back Guarantee.
    </div>
    <div className="text-lg text-center py-1 px-3 mt-2 md:mt-0 w-full md:w-[60%] rounded-full border-[1px] border-black hover:bg-red-950 hover:text-yellow-400 transition-colors duration-400 cursor-pointer"
    onClick={() => handleCategoryClick('Sports')}>
      Shop Collectibles
    </div>
  </div>
  <img
    src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/KA0AAOSwKZhmQglh/$_57.PNG"
    alt=""
    className="w-full md:w-2/3 h-auto md:h-64 object-cover rounded-lg"
  />
</div>


      <div className="flex max-md:flex-col mx-auto mt-5 w-[86%] rounded-lg bg-gray-100 ">

      <div className="w-[25%] max-md:w-[90%] mx-auto flex  flex-col gap-2 ml-8 mt-4">
          <div className="text-[30px] font-bold leading-tight text-red-950">Feel special with 15% off*</div>
          <div className="text-[16px] text-red-950 font-semibold">Save on luxury jewelry, watches and handbags for your summer.</div>
          <div className="text-lg max-md:text-sm text-center py-1 px-3 mt-2 md:mt-0 w-full md:w-[60%] rounded-full border-[1px] border-black hover:bg-red-950 hover:text-yellow-400 transition-colors duration-400 cursor-pointer"
          onClick={() => handleCategoryClick('Womens Fashions')}>
            CODE: LUXUS15
          </div>
        </div>
          <div>
            <img src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/Lw0AAOSwA5ZmWI36/$_57.JPG" alt="banner" className="w-[75%] h-80 rounded-lg mx-auto" />
          </div>

      </div>

      <div>
        <Footer/>
      </div>


    </div>
  );
}

export default Home;
