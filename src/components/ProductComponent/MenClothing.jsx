import React, { useEffect, useState } from 'react';
import Nav1 from '../Nav1';
import Nav2 from '../Nav2';
import { useDispatch } from 'react-redux';
import { setProductId } from "../../features/category/ProductSlice";
import { useNavigate } from 'react-router';


function MenClothing() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()



  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error fetching data: ', err));
  }, []);

  const handleProductClick = (id) => {
    console.log(id)
    dispatch(setProductId(id));
    navigate("/singleProduct")
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit 
      ? words.slice(0, wordLimit).join(' ') + '...' 
      : description;
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

      <div className="flex flex-col lg:flex-row justify-evenly items-center bg-gray-200 w-[90%] mx-auto rounded-lg mt-3 py-5">
  <div className="w-full lg:w-[90%] flex flex-col lg:flex-row justify-center items-center bg-white gap-20 py-3">
    <div className="w-full lg:w-[35%] py-5 px-6 lg:px-10 flex flex-col gap-4">
      <p className="text-[25px] lg:text-[35px] font-bold leading-tight">Welcome to the world of Fashion!</p>
      <p className="text-[16px] lg:text-[18px] font-semibold">Browse all the clothes you need, from design to brands.</p>
    </div>
    <div className="w-full lg:w-[65%] lg:pl-10 flex justify-center">
      <img
        src="https://www.shutterstock.com/image-photo/set-stylish-clothes-on-white-260nw-1804224286.jpg"
        alt="fashion"
        className="w-full lg:w-auto max-lg:p-4 h-64 lg:h-auto object-cover"
      />
    </div>
  </div>
</div>
      <div className='w-[90%] p-2 rounded-lg mx-auto text-center font-semibold text-[40px] mt-5 mb-5 bg-gradient-to-r from-gray-400 via-gray-50 to-gray-400'>
        Witness the products of new era ...
      </div>


      {/* Render fetched data */}
      <div className='w-[90%] mx-auto mt-6'>
        <h2 className='text-[24px] font-semibold'>Men's Clothing</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
          {data.map(item => (
            <div key={item.id} className='border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-200' onClick={() => handleProductClick(item.id)}>
              <img src={item.image} alt={item.title} className='w-full h-48 p-2 object-cover mb-4 rounded-md' />
              <h3 className='text-[18px] font-semibold mb-2'>{truncateDescription(item.title,10)}</h3>
              <p className='text-[16px] text-gray-800 mb-2'>${item.price}</p>
              <p className='text-[14px] text-gray-600 mb-4'>{truncateDescription(item.description,10)}</p>
              <div className='flex justify-between items-center'>
                <p className='text-[14px] text-gray-700'>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenClothing;
