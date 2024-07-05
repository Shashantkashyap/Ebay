import React, { useState, useRef } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoPauseOutline } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { setCategory } from '../features/category/CategorySlice';

function SliderImg() {
  const [isPlaying, setIsPlaying] = useState(false);
  const carouselRef = useRef(null);
  const navigate  =useNavigate()
  const dispatch = useDispatch() 

  const handlePausePlay = () => {
    if (isPlaying) {
      carouselRef.current.pause();
    } else {
      carouselRef.current.cycle();
    }
    setIsPlaying(!isPlaying);
  };

  const handleWomen=(category)=>{
    dispatch(setCategory(category));
    navigate("/exploreProducts")
  }

  const handleElectronics=(category)=>{
    dispatch(setCategory(category));
    navigate("/exploreProducts")
  }

  const handleSports=(category)=>{
    dispatch(setCategory(category));
    navigate("/exploreProducts")
  }

  const handleMen=(category)=>{
    dispatch(setCategory(category));
    navigate("/exploreProducts")
  }

  return (
    <div className="w-full mx-auto relative ">
      <Carousel ref={carouselRef} interval={3000} pause={false} >
        <Carousel.Item>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 md:text-left text-center md:pr-6">
              <div className="text-4xl font-bold leading-tight">
                Feel special this summer with 15% off*
              </div>
              <div className="text-xl font-semibold">
                Save on luxury jewelry, watches and handbags for you.
              </div>
              <div className="text-lg py-2 px-4 inline-block w-[80%] rounded-full border-[1px] border-black">
                CODE: LUXUS15
              </div>
            </div>
            <img
              className="w-full md:w-2/3 h-96 object-cover cursor-pointer"
              src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/su8AAOSwJFRmWI32/$_57.JPG"
              alt="First slide"
              onClick={()=>handleWomen("Womens Fashions")}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative">
            <div className="absolute bottom-16 left-0 w-full md:w-[25%] text-center md:text-left md:left-[10%]">
              <div className="text-4xl font-bold leading-tight text-white">
                Refurbished: where quality meets savings !
              </div>
              <div className="text-xl font-semibold text-white">
                Create your dream home on a budget with trusted brands.
              </div>
              <div className="text-lg border-[1px] border-white rounded-full py-2 px-3 inline-block w-[40%] cursor-pointer" onClick={()=>handleElectronics('Electronics')}>
                Shop now
              </div>
            </div>
            <img
              className="w-full h-96 object-cover cursor-pointer"
              src="https://i.ebayimg.com/00/s/NDEzWDE2MDA=/z/rQsAAOSwX35mPI0d/$_57.JPG"
              alt="Second slide"
              
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative">
            <div className="absolute bottom-16 left-0 w-full md:w-[25%] text-center md:text-left md:left-[10%]">
              <div className="text-4xl font-bold leading-tight">
                Your favorite cards, guaranteed
              </div>
              <div className="text-xl font-semibold">
                Collecting is backed by the ebay money back guarantee.
              </div>
              <div className="text-lg border-[1px] cursor-pointer border-black rounded-full py-2 px-3 inline-block w-[40%] text-center" onClick={()=>handleSports('Sports')}>
                Shop Cards
              </div>
            </div>
            <img
              className="w-full h-96 object-cover cursor-pointer"
              src="https://i.ebayimg.com/00/s/NDEyWDE2MDA=/z/rjkAAOSwUSlmQd--/$_57.PNG"
              alt="Third slide"
              
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex flex-col md:flex-row items-center bg-gray-200 px-7">
            <div className="md:w-1/3 md:pr-6">
              <div className="text-4xl font-bold leading-tight">
                Unique savings on luxury fashion
              </div>
              <div className="text-xl font-semibold">
                Your purchases are backed by the eBay Money Back Guarantee.
              </div>
              <div className="text-lg py-2 px-4 inline-block w-[80%] rounded-full border-[1px] border-black">
                CODE: LUXUS15
              </div>
              <div className="text-lg">*Min. spend $300. Max. discount $100</div>
            </div>
            <div className="flex justify-center items-center md:w-2/3 gap-6 md:gap-16 h-96">
              <img
                className="object-cover w-1/3 h-64 cursor-pointer"
                src="https://i.ebayimg.com/images/g/yzAAAOSwn9dmWIyT/s-l400.webp"
                alt="Fourth slide"
                onClick={()=>handleMen('Deals')}
              />
              <img
                className="object-cover w-1/3 h-64 cursor-pointer"
                src="https://i.ebayimg.com/images/g/HN4AAOSwnFNmWIyi/s-l400.webp"
                alt="Fifth slide"
                onClick={()=>handleMen('Deals')}
              />
              <img
                className="object-cover w-1/3 h-64 cursor-pointer"
                src="https://i.ebayimg.com/images/g/G~EAAOSw-rlmWIyp/s-l400.webp"
                alt="Sixth slide"
                onClick={()=>handleMen('Deals')}
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div
        className="absolute bottom-3 right-2 cursor-pointer bg-white rounded-full"
        onClick={handlePausePlay}
      >
        {isPlaying ? (
          <IoPauseOutline size={32} />
        ) : (
          <FaRegCirclePlay size={32} />
        )}
      </div>
    </div>
  );
}

export default SliderImg;
