import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-[13px] sm:text-sm md:text-base">
          <div>
            <h4 className="font-bold mb-2">Buy</h4>
            <ul>
              <li>Registration</li>
              <li>eBay Money Back Guarantee</li>
              <li>Bidding & buying help</li>
              <li>Stores</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Sell</h4>
            <ul>
              <li>Start selling</li>
              <li>Learn to sell</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Tools & apps</h4>
            <ul>
              <li>Developers</li>
              <li>Security center</li>
              <li>Site map</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Stay connected</h4>
            <ul>
              <li>eBay's Blogs</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div>
            <h4 className="font-bold mb-2">About eBay</h4>
            <ul>
              <li>Company info</li>
              <li>News</li>
              <li>Investors</li>
              <li>Careers</li>
              <li>Government relations</li>
              <li>Advertise with us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Policies</h4>
            <ul>
              <li>Verified Rights Owner (VeRO) Program</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Help & Contact</h4>
            <ul>
              <li>Seller Information Center</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Community</h4>
            <ul>
              <li>Announcements</li>
              <li>Discussion boards</li>
              <li>eBay Giving Works</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-xs sm:text-sm">
          <p>Copyright © 1995-2024 eBay Inc. All Rights Reserved.</p>
          <p>Accessibility, User Agreement, Privacy, Consumer Health Data, Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
