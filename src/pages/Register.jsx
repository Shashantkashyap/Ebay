import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/logo.png';
import personalImage from '../assets/personal.jpg';
import businessImage from '../assets/business.jpg';
import { signUp } from '../UserAuth';
import { saveUserData } from '../Firestore';

const Register = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('personal');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    businessName: '',
    businessEmail: '',
    businessLocation: '',
  });

  const handlePersonalClick = () => {
    setSelectedOption('personal');
  };

  const handleBusinessClick = () => {
    setSelectedOption('business');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = selectedOption === 'personal' ? formData.email : formData.businessEmail;
    const { password } = formData;
    try {
      console.log('Form Data:', formData);
      const user = await signUp(email, password);
      const userData = selectedOption === 'personal' 
        ? { firstName: formData.firstName, lastName: formData.lastName, email }
        : { businessName: formData.businessName, businessEmail: formData.businessEmail, businessLocation: formData.businessLocation };

      console.log('User Data:', userData);
      await saveUserData(user.uid, userData);
      console.log('User UID:', user.uid); 
      alert('Registration successful!');
      navigate("/");
    } catch (error) {
      console.error('Error registering:', error);
      alert('Error registering: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <img src={logo} alt="Company Logo" className="w-22 h-14" />
        <div>
          Already have an account? 
          <Link to="/signin" className="text-black-500 underline ml-2">Sign in</Link>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row flex-grow">
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-gray-100 p-4">
          {selectedOption === 'personal' ? (
            <img src={personalImage} alt="Personal" className="w-full h-auto lg:max-h-[400px] mb-4 lg:mb-0" />
          ) : (
            <img src={businessImage} alt="Business" className="w-full h-auto lg:max-h-[400px] mb-4 lg:mb-0" />
          )}
        </div>

        <div className="flex flex-col justify-center w-full lg:w-1/2 p-4">
          {selectedOption === 'personal' && (
            <div className="bg-blue-500 text-white p-4 rounded mb-4 w-full max-w-md">
              <p>To buy and sell on <a href="https://www.ebay.com" className="text-white underline">www.ebay.com</a> or other eBay sites internationally, existing users can login using their credentials or new users can register an eBay account on ebay.in. Kindly note you can no longer buy or sell on eBay.in.</p>
            </div>
          )}
          <div className="bg-white text-black-500 p-2 rounded mb-4 w-full max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Create an account</h2>
          </div>

          <div className="flex mb-8">
            <button 
              className={`p-2 ${selectedOption === 'personal' ? 'bg-black text-white' : 'bg-gray-200'}`} 
              onClick={handlePersonalClick}
            >
              Personal
            </button>
            <button 
              className={`p-2 ml-2 ${selectedOption === 'business' ? 'bg-black text-white' : 'bg-gray-200'}`} 
              onClick={handleBusinessClick}
            >
              Business
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {selectedOption === 'personal' ? (
              <>
                <div className="flex space-x-4">
                  <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    className="border border-gray-300 p-2 rounded w-full lg:w-1/2" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    className="border border-gray-300 p-2 rounded w-full lg:w-1/2" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    className="border border-gray-300 p-2 rounded w-full" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative">
                  <input 
                    type={passwordVisible ? "text" : "password"} 
                    name="password" 
                    placeholder="Password" 
                    className="border border-gray-300 p-2 rounded w-full" 
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-2"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash color="black" /> : <FaEye color="black" />}
                  </button>
                </div>
                <p className="text-sm text-gray-600">By selecting Create personal account, you agree to our User Agreement and acknowledge reading our User Privacy Notice.</p>
                <button type="submit" className="bg-gray-400 text-white p-2 rounded w-full" style={{ backgroundColor: '#9b9b9b' }}>Create personal account</button>
              </>
            ) : (
              <>
                <div>
                  <input 
                    type="text" 
                    name="businessName" 
                    placeholder="Business Name" 
                    className="border border-gray-300 p-2 rounded w-full" 
                    value={formData.businessName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="businessEmail" 
                    placeholder="Business Email" 
                    className="border border-gray-300 p-2 rounded w-full" 
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative">
                  <input 
                    type={passwordVisible ? "text" : "password"} 
                    name="password" 
                    placeholder="Password" 
                    className="border border-gray-300 p-2 rounded w-full" 
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-2"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash color="black" /> : <FaEye color="black" />}
                  </button>
                </div>
                <div>
                  <input 
                    type="text" 
                    name="businessLocation" 
                    placeholder="Where is your business registered?" 
                    className="border border-gray-300 p-2 rounded w-full" 
                    value={formData.businessLocation}
                    onChange={handleInputChange}
                  />
                </div>
                <p className="mt-4 mb-2 text-sm text-gray-600">
                  If your business is not registered, mention your country of residence.
                </p>
                
                <p className="text-sm text-gray-600">
                  <span>By selecting Create business account, you agree to our</span>
                  <span> User Agreement and acknowledge reading our User Privacy Notice.</span>
                </p>
                <button type="submit" className="bg-gray-400 text-white p-2 rounded w-full" style={{ backgroundColor: '#9b9b9b' }}>Create business account</button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
