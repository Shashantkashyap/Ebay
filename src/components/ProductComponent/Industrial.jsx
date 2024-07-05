import React from 'react';
import industrialEquipmentData from '../../data/Industrial';
import Nav1 from '../Nav1';
import Nav2 from '../Nav2';
import { useDispatch } from 'react-redux';
import { setProductId } from "../../features/category/ProductSlice";
import { useNavigate } from 'react-router';


function Industrial() {

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

      <div className='flex justify-evenly items-center bg-gradient-to-r from-black via-gray-200 to-black w-[90%] mx-auto rounded-lg mt-3 py-3'>
        <div className='w-[95%] flex justify-center items-center'>
          <div className='w-full'>
            <img src="https://qantur.com/wp-content/uploads/2018/02/Industrial-equipment-banner.jpg" alt="Industrial Equipment" className='w-full h-80 object-cover rounded-lg' />
          </div>
        </div>
      </div>

      <div className='w-[90%] p-2 rounded-lg mx-auto text-center font-semibold text-[40px] mt-5 mb-5 bg-gradient-to-r from-red-100 via-gray-50 to-pink-100'>
        Witness the products of new era ...
      </div>


      {/* Render industrial equipment data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-[90%] mx-auto">
        {industrialEquipmentData.map(item => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md" onClick={() => handleProductClick(item.id)}>
            <img src={item.image} alt={item.title} className="w-full h-60 p-4 rounded-lg object-cover" />
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

export default Industrial;
