import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import collectibles from "../data/Collectibles";
import industrial from "../data/Industrial";
import sports from "../data/sportsData";
import toy from "../data/Toy";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Footer from "../components/footer";
import { useNavigate } from "react-router";
import { db } from "../Firebase";
import { doc, collection, addDoc } from "firebase/firestore";

function SingleProduct() {
  const [description, setDescription] = useState({});
  const Id = useSelector((state) => state.product.selectedProductId);
  const navigate = useNavigate();
  const userId = localStorage.getItem("user");

  const handlePayment = () => {
    navigate("/payment");
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${Id}`);
        const json = await res.json();
        if (json) {
          setDescription(json);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (Id) {
      fetchProductData();

      // Check local data sets
      const localDataSets = [sports, collectibles, industrial, toy];
      for (const dataSet of localDataSets) {
        const foundProduct = dataSet.find((product) => product.id === Id);
        if (foundProduct) {
          setDescription(foundProduct);
          break;
        }
      }
    }
  }, [Id]);

  const handleAddToCart = async () => {
    try {
      if (userId) {
        const userDocRef = doc(db, "userID", userId);
        await addDoc(collection(userDocRef, "cartDetails"), {
          id: description.id,
          title: description.title,
          price: description.price,
          description: description.description,
          category: description.category,
          image: description.image,
          rating: description.rating,
        });
        console.log("Product added successfully");
        navigate("/cart");
      } else {
        console.error("User not authenticated");
        navigate("/signin")
        alert("Logged in to add product in your cart")
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-[90%] max-w-screen-lg mx-auto">
        <Nav1 />
      </div>
      <div className="w-full h-[0.4px] bg-gray-300 mx-auto"></div>
      <div className="w-[90%] max-w-screen-lg mx-auto">
        <Nav2 />
      </div>
      <div className="w-full h-[0.3px] bg-gray-300 mx-auto"></div>

      {description.id && (
        <div className="w-[90%] max-w-screen-lg mx-auto mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="pr-0 lg:pr-4">
            <img
              src={description.image}
              alt={description.title}
              className="w-full h-auto"
            />
          </div>
          <div className="pl-0 lg:pl-4 flex flex-col justify-center">
            <h1 className="text-2xl lg:text-3xl font-bold">
              {description.title}
            </h1>
            <p className="text-lg mt-2">
              <strong>Price:</strong> ${description.price}
            </p>
            <p className="text-lg mt-2">
              <strong>Description:</strong> {description.description}
            </p>
            <p className="text-lg mt-2">
              <strong>Category:</strong> {description.category}
            </p>
            {description.rating && (
              <p className="text-lg mt-2">
                <strong>Rating:</strong> {description.rating.rate} (
                {description.rating.count} reviews)
              </p>
            )}
            <div className="mt-4 flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0 lg:space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handlePayment}
              >
                Buy it Now
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default SingleProduct;
