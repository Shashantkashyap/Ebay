import React, { useState } from 'react';
import sportsData from '../../data/sportsData';
import Nav1 from '../Nav1';
import Nav2 from '../Nav2';
import { useDispatch } from 'react-redux';
import { setProductId } from "../../features/category/ProductSlice";
import { useNavigate } from 'react-router';

function Sports() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const handleProductClick = (id) => {
    console.log(id);
    dispatch(setProductId(id));
    navigate("/singleProduct");
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < sportsData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const paginatedData = sportsData.slice(startIndex, startIndex + itemsPerPage);

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
            <img
              src='https://img.freepik.com/free-vector/sport-equipment-banner_1284-32611.jpg'
              alt='sports'
              className='w-full h-96 rounded-lg object-cover'
            />
          </div>
        </div>
      </div>

      <div className='w-[90%] p-2 rounded-lg mx-auto text-center font-semibold text-[40px] mt-5 mb-5 bg-gradient-to-r from-blue-500 via-gray-50 to-blue-500'>
        Witness the products of new era ...
      </div>


      {/* Render fetched data */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mx-auto max-w-[90%]'>
        {paginatedData.map((item) => (
          <div key={item.id} className='bg-white rounded-lg shadow-md overflow-hidden' onClick={() => handleProductClick(item.id)}>
            <img src={item.image} alt={item.title} className='w-full h-60 object-cover' />
            <div className='p-4'>
              <h2 className='text-lg font-semibold text-gray-800'>{item.title}</h2>
              <p className='text-gray-500'>${item.price}</p>
              <p className='text-sm text-gray-600'>{item.description}</p>
              <div className='flex items-center mt-2'>
                <span className='text-yellow-500 flex'>
                  {Array.from({ length: Math.round(item.rating.rate) }, (_, index) => (
                    <svg key={index} className='h-4 w-4 flex fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 1l2.6 5.6L18 7l-4 4.2.9 5.4-4.5-2.4L6.6 17l.9-5.4L3 7l5.4-.4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ))}
                  {Array.from({ length: 5 - Math.round(item.rating.rate) }, (_, index) => (
                    <svg
                      key={index}
                      className='h-4 w-4 fill-current text-gray-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 1l2.6 5.6L18 7l-4 4.2.9 5.4-4.5-2.4L6.6 17l.9-5.4L3 7l5.4-.4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ))}
                </span>
                <span className='ml-2 text-gray-600 text-sm'>({item.rating.count} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center mt-4'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className='px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50'
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * itemsPerPage >= sportsData.length}
          className='px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Sports;
