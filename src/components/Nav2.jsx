import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../features/category/CategorySlice';

const categories = [
  {
    name: 'Collectibles and Arts',
    title: 'Collectibles and Arts',
    items: ['Collectibles', 'Antiques', 'Sports Memorabilia', 'Art'],
  },
  {
    name: 'Electronics',
    title: 'Electronics',
    items: ['Computer and tablets', 'Cameras and photos', 'TV, audio and surveillance', 'Cell phones and accessories'],
  },
  {
    name: 'Womens Fashions',
    title: 'Fashion',
    items: ['Men', 'Women', 'Jewelry and watches', 'Shoes'],
  },
  {
    name: 'Mens Clothing',
    title: 'Home and Garden',
    items: ['Yard, garden and outdoor', 'Craft', 'Home improvements', 'Pet supplies'],
  },
  {
    name: 'Industrial Equipment',
    title: 'Auto Parts and Accessories',
    items: ['GPS and security devices', 'Radar and Laser Detectors', 'Car care and detailing', 'Scooter parts and accessories'],
  },
  {
    name: 'Sports',
    title: 'Musical Instruments and Gear',
    items: ['Guitars', 'Pro audio equipment', 'Strings', 'Stage lighting and effects'],
  },
];

function Nav2() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const dropdownRef = useRef(null);
  const categoryDropdownRef = useRef(null);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate('/exploreProducts');
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
    if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
      setCategoryDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-between w-full py-4 max-sm:py-1 bg-white text-gray-800">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-14 max-md:h-6 mr-6 max-md:mr-1 cursor-pointer" onClick={()=> navigate("/")}/>
      </div>

      <div className="w-[85%] flex items-center space-x-4 max-md:space-x-1">
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <p className="text-md max-md:hidden">Shop by category</p>
            <MdKeyboardArrowDown className="text-xl ml-1 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </div>
          <div
            className={`absolute top-12 left-0 bg-white z-10 w-96 max-h-[80vh] p-4 flex-wrap shadow-lg overflow-y-auto transition-all duration-300 ease-in-out transform ${
              isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index} onClick={() => handleCategoryClick(category.name)}>
                  <p className="font-bold mb-2 cursor-pointer">{category.title}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {category.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full items-center bg-white rounded" ref={dropdownRef} onClick={() => setDropdown(!dropdown)}>
          <div className="relative flex items-center border border-gray-300 flex-grow p-1 px-3 max-md:px-1">
            {dropdown && (
              <div className="absolute w-full top-12 flex flex-col gap-2 text-[15px] font-semibold z-10 bg-white left-0 py-2 px-4 rounded transition-opacity duration-300 ease-in-out opacity-100">
                <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={(e) => {e.stopPropagation(); setCategoryDropdown(!categoryDropdown)}}>Search by Category</p>
                <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={()=> navigate("/searchTitle")}>Search by Title</p>
              </div>
            )}
            {
              categoryDropdown && (
                <div className="absolute w-full top-12 flex flex-row gap-[120px] text-[15px] font-semibold z-10 bg-white left-0 py-2 px-4 rounded transition-opacity duration-300 ease-in-out opacity-100" ref={categoryDropdownRef}>
                  <div className='flex flex-col gap-1'>
                    <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={() => handleCategoryClick('Deals')}>Latest Offers</p>
                    <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={() => handleCategoryClick('Mens Clothing')}>Men's Fashion</p>
                    <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={() => handleCategoryClick('Sports')}>Sports</p>
                    <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={() => handleCategoryClick('Collectibles and Arts')}>Arts and Collectibles</p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={() => handleCategoryClick('Electronics')}>Electronics</p>
                    <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={() => handleCategoryClick('Jewelry')}>Jewelry</p>
                    <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={() => handleCategoryClick('Industrial Equipment')}>Industrial Equipments</p>
                    <p className="p-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg" onClick={() => handleCategoryClick('Womens Fashions')}>Women's Fashion</p>
                  </div>
                </div>
              )
            }
            <CiSearch className="text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Search for anything"
              className="flex-grow px-2 max-md:px-0 py-1 outline-none max-sm:w-[50%]"
            />
          </div>
          <button className="px-6 max-md:px-1 py-2 bg-blue-500 text-white rounded-r">Search</button>
        </div>

        <Link to="/advance">
          <div className="text-sm cursor-pointer">Advanced</div>
        </Link>
      </div>
    </div>
  );
}

export default Nav2;
