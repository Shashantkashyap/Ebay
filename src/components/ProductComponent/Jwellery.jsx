import React, { useEffect, useState } from 'react';
import Nav1 from '../Nav1';
import Nav2 from '../Nav2';
import { useDispatch } from 'react-redux';
import { setProductId } from "../../features/category/ProductSlice";
import { useNavigate } from 'react-router';


function Jewellery() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()



  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
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

      <div className='flex justify-evenly items-center bg-gradient-to-r from-black via-gray-200 to-black w-[90%] mx-auto rounded-lg mt-3 py-3'>
        <div className='w-[95%] flex justify-center items-center'>
          <div className='w-full'>
            <img src="https://www.shutterstock.com/image-photo/gold-woman-skin-beauty-fashion-260nw-519340969.jpg" alt="fashion" className='w-full h-80 object-cover rounded-lg' />
          </div>
        </div>
      </div>

      <div className='w-[90%] p-2 rounded-lg mx-auto text-center font-semibold text-[40px] mt-5 mb-5 bg-gradient-to-r from-red-100 via-gray-50 to-pink-100'>
        Witness the products of new era ...
      </div>


      {/* Render fetched data */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-6 mx-auto max-w-[90%]'>
        {data.map((product) => (
          <div key={product.id} className='bg-white rounded-lg shadow-md overflow-hidden' onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.title} className='w-full h-40 object-cover p-2' />
            <div className='p-4'>
              <h2 className='text-lg font-semibold text-gray-800'>{product.title}</h2>
              <p className='text-gray-500'>${product.price}</p>
              <p className='text-sm text-gray-600'>{truncateDescription(product.description, 10)}</p>
              <div className='flex items-center mt-2'>
                <span className='text-yellow-500 flex'>
                  {Array.from({ length: Math.round(product.rating.rate) }, (_, index) => (
                    <svg key={index} className='h-4 w-4 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                      <path d='M10 1l2.6 5.6L18 7l-4 4.2.9 5.4-4.5-2.4L6.6 17l.9-5.4L3 7l5.4-.4z'/>
                    </svg>
                  ))}
                  {Array.from({ length: 5 - Math.round(product.rating.rate) }, (_, index) => (
                    <svg key={index} className='h-4 w-4 fill-current text-gray-300' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                      <path d='M10 1l2.6 5.6L18 7l-4 4.2.9 5.4-4.5-2.4L6.6 17l.9-5.4L3 7l5.4-.4z'/>
                    </svg>
                  ))}
                </span>
                <span className='ml-2 text-gray-600 text-sm'>({product.rating.count} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jewellery;
