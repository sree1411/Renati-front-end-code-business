import { CartCard } from "../components/CartCard";
import { useCart } from "../usecontext/CartContext";

 

export const Cart = () => {


  const {total, cartList} = useCart()

  
  return (
    <div className="cartCard">

<h1 style={{
  backgroundColor: '#f0f0f0',
  padding: '10px',
  margin: '30px',
  boxShadow: '2px 2px 4px #888888'
}}>
  Items in the cart: {cartList.length}  <br/>
  Total amount : ₹{total}
</h1>
      {cartList.map((product)=>(
        <CartCard key={product.id} product={product}/>
      ))}
   
    </div>
  )
}


