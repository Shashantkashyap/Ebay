import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase'; // Make sure this path is correct
import { collection, query, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Footer from '../components/footer';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setCartLength } from '../features/category/cartSlice';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("user");
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCartItems = async () => {
      if (userId) {
        try {
          const cartItemsCollection = collection(db, 'userID', userId, 'cartDetails');
          const q = query(cartItemsCollection);
          const querySnapshot = await getDocs(q);
          const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setCartItems(items);
          dispatch(setCartLength(items.length))
          
        } catch (error) {
          console.error("Error fetching cart items: ", error);
        }
      } else {
        console.error("User not authenticated");
      }
    };

    fetchCartItems();
  }, [userId]);

  const deleteCartItem = async (itemId) => {
    
    if (!userId) {
      console.error("User not authenticated");
      return;
    }
  
    if (typeof itemId !== 'string') {
      console.error("Invalid itemId");
      return;
    }
  
    try {
      const docRef = doc(db, 'userID', userId, 'cartDetails', itemId);
      console.log(docRef.path)
      await deleteDoc(docRef);
      console.log("deleted")
      
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting cart item: ", error);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className='w-full'>
      <div className='w-full'>
        <div className='w-[90%] mx-auto'><Nav1 /></div>
        <div className='w-full h-[0.4px] bg-gray-300 mx-auto'></div>
        <div className='w-[90%] mx-auto'><Nav2 /></div>
      </div>

      <div className='flex flex-col lg:flex-row-reverse gap-16 px-4 lg:px-10 w-[90%] mx-auto mt-3 space-y-6 lg:space-y-0 lg:space-x-6'>

        <div className='w-full lg:w-[30%] max-h-64 bg-gray-100 p-4 rounded-lg shadow'>
          <h2 className='text-xl font-bold'>Summary</h2>
          <p className='text-lg mt-2'>Subtotal: ${calculateSubtotal()}</p>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 w-full'
            onClick={() => navigate('/payment')}
            disabled={cartItems.length === 0}
          >
            Go to Checkout
          </button>
          <button
            className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-4 w-full'
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
        
        <div className='w-full lg:w-[65%]'>
          <h1 className='text-3xl font-bold mb-5'>Shopping Cart</h1>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.id} className='flex items-center justify-between mt-4 bg-gray-100 shadow-lg px-3 py-3 rounded-lg'>
                <div className='flex items-center'>
                  <img src={item.image} alt={item.title} className='w-20 h-20 md:w-28 md:h-28 p-2 object-cover' />
                  <div className='ml-4'>
                    <h2 className='text-lg font-bold'>{item.title}</h2>
                    <p className='text-lg'>${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteCartItem(String(item.id))}
                  className='text-red-500 hover:text-red-700'>
                  <MdDelete size={24} />
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;