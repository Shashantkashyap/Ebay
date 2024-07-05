import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import { auth } from '../Firebase'; // Import the auth instance
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the signIn function
import logo from '../assets/logo.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignIn = async () => {
    console.log("SignIn button clicked"); // Debugging log
    console.log("Email:", email); // Debugging log
    console.log("Password:", password); // Debugging log
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("SignIn successful"); // Debugging log
      localStorage.setItem("user", email)
      navigate('/');
      // Handle successful sign-in (e.g., redirect to another page)
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div>
      <img src={logo} alt="Company Logo" className="w-22 h-16 mt-5 ml-5 cursor-pointer" onClick={()=> navigate("/")}/>
      <div className="flex items-center justify-center h-screen flex-col">
        <div className="bg-blue-500 text-white p-4 rounded mb-4 w-full max-w-sm text-center">
          To buy and sell on <a href="https://www.ebay.com">www.ebay.com</a> or other eBay sites internationally, existing users can login using their credentials or new users can register an eBay account on <a href="https://www.ebay.in">ebay.in</a>. Kindly note you can no longer buy or sell on eBay.in.
        </div>
        <h1 className="text-5xl font-bold mb-3">Hello</h1>
        <div className="text-black mb-6">
          <span className="font-normal">Sign in to eBay</span> or
          <div className="text-blue-500 ml-1 cursor-pointer" onClick={()=> navigate("/register")}>create an account</div>.
        </div>
        <div className="flex flex-col items-center w-full px-4">
          <input
            type="text"
            placeholder="Email or Username"
            className="bg-gray-100 p-2 border border-gray-300 rounded mb-4 w-full max-w-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-100 p-2 border border-gray-300 rounded mb-4 w-full max-w-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full max-w-sm"
            onClick={handleSignIn}
          >
            Continue
          </button>
          <div className="text-xs mt-2 text-center">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500 rounded mr-4" />
              Stay signed in
            </label>
            <br />
            <span className="text-black-500">Using a public or shared device?<br /> Uncheck to protect your account.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;