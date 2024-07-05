import React, { useEffect, useState } from 'react';
import Nav1 from '../Nav1';
import Nav2 from '../Nav2';
import { useDispatch } from 'react-redux';
import { setProductId } from "../../features/category/ProductSlice";
import { useNavigate } from 'react-router';

function Deals() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Adjust as needed
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error fetching data: ', err));
  }, []);

  const handleProductClick = (id) => {
    dispatch(setProductId(id));
    navigate("/singleProduct");
  };

  // Logic to slice data based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

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

      <div className="flex flex-col md:flex-row items-center w-[90%] mx-auto mt-3">
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
              className="w-full md:w-2/3 h-96 object-cover"
              src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/su8AAOSwJFRmWI32/$_57.JPG"
              alt="First slide"
            />
          </div>

      <div className='w-[90%] p-2 rounded-lg mx-auto text-center font-semibold text-[40px] mt-3 bg-gradient-to-r from-red-100 via-gray-50 to-yellow-300'>
        Witness the products of new era ...
      </div>

      {/* Display current page items in 4 cards per row */}
      <div className="flex flex-wrap justify-center w-[95%] mx-auto gap-4 mt-5">
        {currentItems.map(item => (
          <div key={item.id} className=" p-1 bg-white rounded-lg shadow-md mx-2" style={{ width: "17%" }}>
            <div onClick={() => handleProductClick(item.id)}>
              
              <img src={item.image} alt={item.title} className="w-full p-1 h-40 object-cover rounded-md mx-auto mb-2" />
              <h2 className="text-[20px] mt-3 font-semibold mb-3">{item.title}</h2>
              <p className="text-gray-700 mt-2">{truncateDescription(item.description, 10)}</p>
              <p className="text-gray-900 font-bold mt-4 text-[17px] text-center">${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center my-5">
        {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Deals;
