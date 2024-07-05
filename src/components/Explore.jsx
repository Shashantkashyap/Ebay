import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

function Explore() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 700px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 700px) and (max-width: 1000px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1000px)' });

  const getSliderSettings = () => {
    if (isLargeScreen) {
      return {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
      };
    } else if (isMediumScreen) {
      return {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    } else if (isSmallScreen) {
      return {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
      };
    }
  };

  const categories = [
    "https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg",
    "https://ir.ebaystatic.com/cr/v/c01/02_PopularDestination_Sneakers.jpg",
    "https://ir.ebaystatic.com/cr/v/c01/03_PopularDestination_Tire.jpg",
    "https://ir.ebaystatic.com/cr/v/c01/ECM_PopularDestination_Reburbished.jpg",
    "https://ir.ebaystatic.com/cr/v/c01/05_PopularDestination_Cards.jpg",
    "https://ir.ebaystatic.com/cr/v/c01/06_PopularDestination_PreLoved.jpg",
    "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg"
  ];

  const sliderSettings = getSliderSettings();

  return (
    <div className='flex flex-col gap-10'>
      <div className='text-[30px] font-bold'>
        Explore Popular Categories
      </div>

      <Slider {...sliderSettings}>
        {categories.map((src, index) => (
          <div key={index} className='flex justify-center'>
            <img src={src} alt="" className='w-44 h-44 rounded-full' />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Explore;
