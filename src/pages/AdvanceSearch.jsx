import React from 'react';
import logo from "../assets/logo.png"

function AdvancedSearch() {
  return (
    <div className="container mx-auto p-4">
      <div className='flex items-center gap-10 mb-10'>
        <div>
            <img src={logo} alt="logo" className='h-14'/>
        </div>
      <h1 className="text-[30px] max-md:text-[20px] font-semibold ">Advanced Search</h1>
      </div>
      <form className="space-y-4 flex max-md:flex-col gap-[10%]">
        
        <div className='w-[20%] max-md:w-full'>
        {/* Items */}
        <div>
          <h2 className="text-lg font-semibold">Items</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">Find items</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Enter keywords or item number" />
            </label>
            <label className="block">
              <span className="text-gray-700">By seller</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
            <label className="block">
              <span className="text-gray-700">By item number</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
          </div>
        </div>

        {/* Stores */}
        <div>
          <h2 className="text-lg font-semibold">Stores</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">Items in stores</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
            <label className="block">
              <span className="text-gray-700">Find stores</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
          </div>
        </div>

        </div>

        <div className='flex flex-col gap-4 w-[50%] max-md:w-full'>

        {/* Keyword options */}
        <div>
          <h2 className="text-lg font-semibold">Keyword options</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">All words, any order</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
            <label className="block">
              <span className="text-gray-700">Exclude words from your search</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
          </div>
        </div>

        {/* Category */}
        <div>
          <h2 className="text-lg font-semibold">In this category</h2>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
            <option>All Categories</option>
            <option>Art</option>
            <option>Baby</option>
            <option>Books and Magzines</option>
            <option>Business and models</option>
            <option>Cameras</option>
            <option>Cell phones and accesories</option>
            <option>Clothing and shoes</option>
            <option>Paper money and coin</option>
            <option>Craft</option>
            <option>Everything else</option>
            <option>Home and garden</option>
            <option>Jwellery</option>

            {/* Add more categories here */}
          </select>
        </div>

        {/* Search including */}
        <div>
          <h2 className="text-lg font-semibold">Search Including</h2>
          <div className="space-y-2">
            <label className="inline-flex items-center mx-3">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Title and description</span>
            </label>
            <label className="inline-flex items-center mx-3">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Completed items</span>
            </label>
            <label className="inline-flex items-center mx-3">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Sold items</span>
            </label>
          </div>
        </div>

        {/* Price */}
        <div>
          <h2 className="text-lg font-semibold">Price</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">Show items priced from $</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Min price" />
            </label>
            <label className="block">
              <span className="text-gray-700"> to $</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Max price" />
            </label>
          </div>
        </div>

        {/* Buying Format */}
        <div>
          <h2 className="text-lg font-semibold">Buying Format</h2>
          <div className="space-y-2">
            <label className="inline-flex items-center mx-3">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Accepts offers</span>
            </label>
            <label className="inline-flex items-center mx-3">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Auction</span>
            </label>
            <label className="inline-flex items-center mx-3">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Buy It Now</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Classified ads</span>
            </label>
          </div>
        </div>

        {/* Condition */}
        <div>
          <h2 className="text-lg font-semibold">Condition</h2>
          <div className="space-y-2">
            <label className="inline-flex items-center mx-3">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">New</span>
            </label>
            <label className="inline-flex items-center mx-3">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Used</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Not specified</span>
            </label>
          </div>
        </div>

        {/* Show Results */}
        <div>
          <h2 className="text-lg font-semibold">Show Results</h2>
          <div className="space-y-2">
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Free returns</span>
            </label>
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Returns accepted</span>
            </label>
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Authorized seller</span>
            </label>
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Deals and savings</span>
            </label>
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Sale items</span>
            </label>
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Listed as lots</span>
            </label>
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Benefits charity</span>
            </label>
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Authenticity Guarantee</span>
            </label>
          </div>
        </div>

        {/* Items Ending Within */}
        <div>
          <h2 className="text-lg font-semibold">Items Ending Within</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">Ending within</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="2 hours" />
            </label>
          </div>
        </div>

        {/* Number of bids */}
        <div>
          <h2 className="text-lg font-semibold">Number of bids</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">Number of bids from</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Min bid count" />
            </label>
            <label className="block">
              <span className="text-gray-700"> to</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Max bid count" />
            </label>
          </div>
        </div>

        {/* Multiple items */}
        <div>
          <h2 className="text-lg font-semibold">Multiple items</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">Multiple items from</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Min quantity" />
            </label>
            <label className="block">
              <span className="text-gray-700"> to</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Max quantity" />
            </label>
          </div>
        </div>

        {/* Shipping Options */}
        <div>
          <h2 className="text-lg font-semibold">Shipping Options</h2>
          <div className="space-y-2">
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Free shipping</span>
            </label>
            <label className="inline-flex items-center mx-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Local pickup</span>
            </label>
          </div>
        </div>

        {/* Item Location */}
        <div>
          <h2 className="text-lg font-semibold">Item Location</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">Default</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
            <label className="block">
              <span className="text-gray-700">Located in</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="India" />
            </label>
            <label className="block">
              <span className="text-gray-700">Available to</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="India" />
            </label>
          </div>
        </div>

        {/* Sellers */}
        <div>
          <h2 className="text-lg font-semibold">Sellers</h2>
          <div className="space-y-2">
            <label className="block">
              <span className="text-gray-700">Only show items from:</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Specific sellers (enter sellers' user IDs)" />
            </label>
            <label className="block">
              <span className="text-gray-700">Include</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Enter seller's name or multiple seller names separated by a comma or a space" />
            </label>
            <label className="block">
              <span className="text-gray-700">Sellers with eBay stores</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
            <label className="block">
              <span className="text-gray-700">My saved sellers list</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
          </div>
        </div>

        {/* Sort By */}
        <div>
          <h2 className="text-lg font-semibold">Sort By</h2>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
            <option>- Select -</option>
            <option>- Time: Early listed -</option>
            <option>- Time: Ending soon -</option>
            <option>- Price + Shipping -</option>
            <option>- Distance -</option>
            {/* Add more sort options here */}
          </select>
        </div>

        {/* View Results */}
        <div>
          <h2 className="text-lg font-semibold">View Results</h2>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
            <option>- Select -</option>
            <option>- List view -</option>
            <option>- Gallery view -</option>
            {/* Add more view results options here */}
          </select>
        </div>

        {/* Results Per Page */}
        <div>
          <h2 className="text-lg font-semibold">Results Per Page</h2>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
            <option>- Select -</option>
            <option>- 60 -</option>
            <option>- 120 -</option>
            <option>- 240 -</option>
            {/* Add more results per page options here */}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
          <button type="reset" className="px-4 py-2 bg-gray-500 text-white rounded">Clear options</button>
        </div>

        </div>

      </form>

      <footer className="mt-10 border-t pt-4 text-[13px] text-gray-600">
        <ul className="flex flex-wrap space-x-4">
          <li><a href="#" className="hover:text-blue-500">About eBay</a></li>
          <li><a href="#" className="hover:text-blue-500">Announcements</a></li>
          <li><a href="#" className="hover:text-blue-500">Community</a></li>
          <li><a href="#" className="hover:text-blue-500">Security Center</a></li>
          <li><a href="#" className="hover:text-blue-500">Seller Information Center</a></li>
          <li><a href="#" className="hover:text-blue-500">Policies</a></li>
          <li><a href="#" className="hover:text-blue-500">Affiliates</a></li>
          <li><a href="#" className="hover:text-blue-500">Help & Contact</a></li>
          <li><a href="#" className="hover:text-blue-500">Site Map</a></li>
        </ul>
        <p className="mt-4">&copy; 1995-2024 eBay Inc. All Rights Reserved. <a href="#" className="hover:text-blue-500">Accessibility</a>, <a href="#" className="hover:text-blue-500">User Agreement</a>, <a href="#" className="hover:text-blue-500">Privacy</a>, <a href="#" className="hover:text-blue-500">Consumer Health Data</a>, <a href="#" className="hover:text-blue-500">Payments Terms of Use</a>, <a href="#" className="hover:text-blue-500">Cookies</a>, <a href="#" className="hover:text-blue-500">CA Privacy Notice</a>, <a href="#" className="hover:text-blue-500">Your Privacy Choices</a> and <a href="#" className="hover:text-blue-500">AdChoice</a>.</p>
      </footer>


    </div>
  );
}

export default AdvancedSearch;
