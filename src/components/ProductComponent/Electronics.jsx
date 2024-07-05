import React, { useEffect, useState } from 'react';
import Nav1 from '../Nav1';
import Nav2 from '../Nav2';
import { useDispatch } from 'react-redux';
import { setProductId } from "../../features/category/ProductSlice";
import { useNavigate } from 'react-router';

function Electronics() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
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

      <div className="flex flex-col lg:flex-row lg:justify-evenly items-center bg-[#b5e7f0] w-[90%] mx-auto gap-6 rounded-lg mt-3">
  <div className="w-full lg:w-[30%] py-5 px-6 lg:px-10 flex flex-col gap-4">
    <p className="text-[35px] lg:text-[35px] font-bold leading-tight">Welcome to the world of tech</p>
    <p className="text-[18px] lg:text-[18px] font-semibold">Browse all the devices you need, from smartphones to PCs.</p>
  </div>
  <div>
    <img
      src="https://t4.ftcdn.net/jpg/06/91/17/95/360_F_691179587_QSctAaNAIbYMjexjEV3w8clmvzcXmJuU.jpg"
      alt="electronics"
      className="w-full lg:w-auto lg:p-5 h-64 lg:h-auto object-cover"
    />
  </div>
</div>

      <div className='w-[90%] p-2 rounded-lg mx-auto text-center font-semibold text-[40px] mt-5 mb-5 bg-gradient-to-r from-blue-200 via-gray-50 to-blue-200'>
        Witness the products of new era ...
      </div>


      {/* Render fetched data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 px-5">
        {data.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4" onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.title} className="w-full h-60 p-4 object-cover mb-4" />
            <h2 className="text-gray-800 text-lg font-semibold">{truncateDescription(product.title,10)}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-600">{truncateDescription(product.description,10)}</p>
            <div className="flex items-center mt-4">
              <span className="text-gray-700 text-sm">{product.rating.rate} ({product.rating.count} reviews)</span>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Electronics;
