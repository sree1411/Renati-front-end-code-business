import React, { useEffect, useState } from 'react';
import { useCart } from '../usecontext/CartContext';
import { Link } from 'react-router-dom';
 

export const ProductCard = ({ product }) => {

   const { addToCart, cartList, removeFromCart} = useCart();
   
   const [show, setShow] = useState(false)

   const { id, name, description, price, image } = product;


  useEffect(()=>{
    const productInCart = cartList.find((product)=>product.id === id)
    if(productInCart){
      setShow(true)
    }else{
      setShow(false)
    }
  }, [cartList, id]) 
      

  

  return (
    <div className="w-full m-5 h-110 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
        <img className="p-8 rounded-t-lg" src={image} alt={name} />
      </Link>
      <div className="px-5 pb-5">
        
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
         
        
          <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
        
        <div className="flex items-center justify-between mt-5 mb-5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{price}/-only </span>
         
        </div>
        
        
        { show ? (<button className="add-to-cart-btn" onClick={()=> removeFromCart(product)} >Remove From cart</button> ):( <button className="add-to-cart-btn" onClick={()=> addToCart(product)} >Add to cart</button>)}
      </div>
    </div>
  );
};
