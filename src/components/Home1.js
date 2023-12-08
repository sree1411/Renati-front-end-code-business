import {ProductCard} from '../components/ProductCard'
import { Header1 } from './Header1';

export const Home1 = () => {

  const products = [
    { id: 1, name: "Stainless Steel Cooking Pot", description: "High-quality stainless steel pot for cooking various dishes.", price: "29.99", image:"/assests/images/cookingpart.jpg" },
    { id: 2, name: "Non-Stick Frying Pan", description: "Non-stick frying pan suitable for everyday cooking needs.", price: "19.99", image:"/assests/images/frypan.jpg"  },
    { id: 3, name: "Cutlery Set (24-Piece)", description: "Complete set of stainless steel cutlery for dining.", price: "49.99" , image:"/assests/images/cutlery.jpg"  },
    { id: 4, name: "Glass Mixing Bowls (Set of 3)", description: "Set of three glass mixing bowls ideal for food preparation.", price: "14.99" , image:"/assests/images/steelbowl.jpg" },
    { id: 5, name: "Dinner set", description: "Elegant and durable dinner set, perfect for serving meals and entertaining guests.", price: "34.99", image:"/assests/images/dinnerset.jpg"  },
    { id: 6, name: "Spoons Set", description: "A set of premium stainless steel spoons suitable for various purposes, including serving and cooking.", price: "22.99" , image:"/assests/images/utensils.jpg"  }
  ];



  return (
    <>
      <Header1/>
    <div className='ProductCard'>

      {products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
      
    </div>

    </>
  )
}


