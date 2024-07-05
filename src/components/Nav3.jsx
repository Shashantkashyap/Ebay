import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../features/category/CategorySlice';
import { useNavigate } from 'react-router';


function Nav3() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate("/exploreProducts")
  };

  return (
    <div className='flex items-center justify-center text-[13px] gap-10 py-2 bg-gray-50 mt-1 relative'>
      {/* Dropdown for smaller screens */}
      <div className='sm:hidden relative group'>
        <p className='cursor-pointer font-semibold m-2 text-[15px]'>Categories</p>
        <div className='absolute left-0 z-10 hidden group-hover:block mt-1 py-2 bg-white shadow-lg rounded-md cursor-pointer'>
          {['Electronics', 'Mens Clothing', 'Womens Fashions', 'Jewelry', 'Sports', 'Collectibles and Arts', 'Industrial Equipment', 'Deals'].map((category) => (
            <p key={category} className='px-4 py-2' onClick={() => handleCategoryClick(category)}>{category}</p>
          ))}
        </div>
      </div>

      {/* Display as inline for larger screens */}
      <div className='hidden sm:flex items-center gap-10'>
        {['Electronics', 'Mens Clothing', 'Womens Fashions', 'Jewelry', 'Sports', 'Collectibles and Arts', 'Industrial Equipment', 'Deals'].map((category) => (
          <p key={category} className=' cursor-pointer' onClick={() => handleCategoryClick(category)}>{category}</p>
        ))}
      </div>
    </div>
  );
}

export default Nav3;
