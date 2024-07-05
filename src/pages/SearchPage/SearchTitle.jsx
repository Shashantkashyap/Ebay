import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import All from "../../data/All"; 
import Footer from "../../components/footer"
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { setProductId } from "../../features/category/ProductSlice";

function SearchTitle() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleSearch = () => {
    const results = All.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(results);
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : description;
  };


  const handleProductClick = (id) => {
    console.log(id)
    dispatch(setProductId(id));
    navigate("/singleProduct")
  };
  return (
    <div className="w-full mx-auto">
      <div className="flex items-center w-[90%] gap-8 mx-auto mt-2">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-14 max-md:h-6 mr-6 max-md:mr-1 cursor-pointer" onClick={()=> navigate("/")}
          />
        </div>
        <div className="flex gap-1 w-[80%]">
          <div className="w-full border-[1px] border-black p-1 flex items-center gap-2 rounded-lg px-3">
            <CiSearch className="text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Search for title"
              className="flex-grow px-2 max-md:px-0 py-1 outline-none max-sm:w-[70%]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="px-6 max-md:px-1 py-2 bg-blue-500 text-white rounded-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {filteredResults.length === 0 ? (
        <div className="text-[40px] text-center mt-10 text-[#e3342f] bg-gradient-to-r from-[#f5f5f5] to-[#fff] ">You either mistyped or your product will be available soon...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-8" >
          {filteredResults.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md" onClick={() => handleProductClick(product.id)}>
              <img src={product.image} alt={product.title} className="h-48 w-full object-cover rounded-md" />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600 mt-2">{truncateDescription(product.description, 10)}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-blue-500 font-bold">${product.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">{product.rating.rate}</span>
                    <span className="text-gray-600">({product.rating.count})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer/>
    </div>
  );
}

export default SearchTitle;
