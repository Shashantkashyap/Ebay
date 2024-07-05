import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import allData from "../../data/All";
import { useDispatch } from 'react-redux';
import { setProductId } from '../../features/category/ProductSlice';
import { useNavigate } from 'react-router';

function Suggestions() {
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const generateRandomIds = () => {
    const ids = new Set();
    while (ids.size < 5) {
      const randomId = Math.ceil(Math.random() * allData.length);
      ids.add(randomId);
    }
    return Array.from(ids);
  };

  const updateSelectedItems = () => {
    const randomIds = generateRandomIds();
    const items = allData.filter(item => randomIds.includes(item.id));
    setSelectedItems(items);
  };

  useEffect(() => {
    updateSelectedItems();
  }, []);

  const handlePrevClick = () => {
    updateSelectedItems();
  };

  const handleNextClick = () => {
    updateSelectedItems();
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit 
      ? words.slice(0, wordLimit).join(' ') + '...' 
      : description;
  };

  const handleClick =(id)=>{
    dispatch(setProductId(id));
    navigate("/singleProduct")

  }

  return (
    <div className="relative w-[95%] w-min-[90%] mx-auto overflow-hidden ">
        <div className='text-[30px] font-semibold mt-20 px-5 mb-5'>
            Explore more Products :
        </div>
     
     <div className='flex gap-7 items-center'>
     
     <div>
     <MdOutlineKeyboardArrowLeft
        className=" transform -translate-y-1/2 text-4xl text-gray-700 cursor-pointer hover:text-gray-900"
        onClick={handlePrevClick}
      />
     </div>
      <div className="flex justify-around mt-7 gap-3">
        {selectedItems.map((item) => (
          <div
            key={item.id}
            className="w-1/5 flex flex-col gap-2 max-h-[500px] items-center p-2 text-center border border-gray-200 rounded-lg shadow-md"
            onClick={()=>handleClick(item.id)}
          >
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-[15px] font-semibold mb-1">{truncateDescription(item.title, 10)}</h3>
            
            <p className="text-lg font-bold mb-2">${item.price}</p>
            <p className="text-sm text-gray-500">Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
          </div>
        ))}
      </div>
      <div>
      <MdKeyboardArrowRight
        className=" transform -translate-y-1/2 text-4xl text-gray-700 cursor-pointer hover:text-gray-900"
        onClick={handleNextClick}
      />
      </div>
      </div>
    </div>
  );
}

export default Suggestions;