import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../usereducer/cartReducer"



const initialState ={
    cartList:[],
    total:0
}

const  CartContext = createContext(initialState)

export const CartProvider =({children})=>{

       const [state, dispatch] = useReducer(cartReducer,initialState)



   const addToCart = (product)=>{
    
       const updateCartList =state.cartList.concat(product)
       const updateTotal = state.total + parseFloat(product.price);
       dispatch({
        type: "ADD_TO_CART",
        payload:{
            products:updateCartList,
            total: updateTotal
        }
       })

   }


  const removeFromCart = (product)=>{

  const updateCartList = state.cartList.filter(current => current.id !== product.id)
  const updateTotal = state.total - parseFloat(product.price);
  dispatch({
    type: "REMOVE_FROM_CART",
    payload:{
        products:updateCartList,
        total: updateTotal
    }
   })

  }
    

    const value ={
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart

    }

    return (
     <CartContext.Provider value={value}>
        {children}
     </CartContext.Provider>
    )
}

export const useCart =()=>{
    const context = useContext(CartContext)
    return context;
}