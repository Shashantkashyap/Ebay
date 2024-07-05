import React from 'react'
import Electronics from '../components/ProductComponent/Electronics'
import MenClothing from '../components/ProductComponent/MenClothing'
import WomenFashion from '../components/ProductComponent/WomenFashion'
import Jwellery from '../components/ProductComponent/Jwellery'
import Sports from '../components/ProductComponent/Sports'
import CollectiblesandArts from '../components/ProductComponent/CollectiblesandArts'
import Industrial from '../components/ProductComponent/Industrial'
import Deals from '../components/ProductComponent/Deals'
import Footer from '../components/footer'
import { useSelector } from 'react-redux'

import Suggestions from '../components/ProductComponent/Suggestions'

function ExploreProducts() {
    const selectedCategory = useSelector(state => state.category.selectedCategory);

    console.log(selectedCategory)
    const renderCategoryComponent = () => {
        switch (selectedCategory) {
          case "Electronics":
            return <Electronics />;
          case "Mens Clothing":
            return <MenClothing />;
          case "Womens Fashions":
            return <WomenFashion />;
          case "Jewelry":
            return <Jwellery />;
          case "Sports":
            return <Sports />;
          case "Collectibles and Arts":
            return <CollectiblesandArts />;
          case "Industrial Equipment":
            return <Industrial />;
          default:
            return <Deals />;
        }
      };
    
      return (
        <div className='w-full mx-auto'>
          
          {/* Render selected category component */}

          {renderCategoryComponent()}


         

          <Suggestions/>
    
          {/* Footer */}
          <Footer />
        </div>
      );
    
}

export default ExploreProducts

