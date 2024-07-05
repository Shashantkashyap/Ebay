import React from 'react';
import collectiblesData from '../../data/Collectibles.js';
import Nav1 from '../Nav1';
import Nav2 from '../Nav2';
import { useDispatch } from 'react-redux';
import { setProductId } from "../../features/category/ProductSlice";
import { useNavigate } from 'react-router';


function CollectiblesandArts() {

  const dispatch = useDispatch();
  const navigate = useNavigate()



  const handleProductClick = (id) => {
    console.log(id)
    dispatch(setProductId(id));
    navigate("/singleProduct")
  };
  return (
    <div>
      <div className='w-[90%] mx-auto'>
        <Nav1 />
      </div>
      <div className='w-[100%] h-[0.4px] bg-gray-300 mx-auto'></div>
      <div className='w-[90%] mx-auto'>
        <Nav2 />
      </div>
      <div className='w-[100%] h-[0.4px] bg-gray-300 mx-auto'></div>

      <div className="flex justify-evenly items-center bg-gray-200 w-[90%] mx-auto rounded-lg mt-3 p-2">
  <div className="w-full lg:w-[100%] flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-[#c59c8b] to-[#8b6c5c] gap-6 lg:gap-20 py-3">
    <div className="w-full lg:w-[35%] py-5 px-6 lg:px-10 flex flex-col gap-4">
      <p className="text-[20px] lg:text-[35px] font-bold leading-tight text-white">From Past to Present, Collectible Elegance!</p>
      <p className="text-[14px] lg:text-[18px] font-semibold text-white">Celebrating Art in Every Collection.</p>
    </div>
    <div className="w-full lg:w-[50%] lg:pl-6">
      <img
        src="https://thumbs.dreamstime.com/b/antiques-collectibles-sign-letterpress-antiques-collectibles-small-business-sign-message-letterpress-type-letters-woodgrain-115691288.jpg"
        alt="Collectibles and Arts"
        className="w-full h-64 lg:h-auto object-cover rounded-lg"
      />
    </div>
  </div>
</div>
      <div className='w-[90%] p-2 rounded-lg mx-auto text-center font-semibold text-[40px] mt-5 mb-5 bg-gradient-to-r from-red-100 via-gray-50 to-pink-100'>
        Witness the products of new era ...
      </div>

      {/* Render fetched data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-[90%] mx-auto">
        {collectiblesData.map(item => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md" onClick={() => handleProductClick(item.id)}>
            <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mb-2">${item.price}</p>
              <p className="text-gray-700">{item.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-lg">
                  {[...Array(Math.floor(item.rating.rate))].map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                  {item.rating.rate % 1 !== 0 && (
                    <i className="fas fa-star-half-alt"></i>
                  )}
                </span>
                <span className="ml-1 text-gray-600">({item.rating.count})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectiblesandArts;
