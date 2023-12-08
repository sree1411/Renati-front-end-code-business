import React from 'react'
import images2  from '../assests/two.jpg'


export const CarosilComponents = () => {
  return (
    
<div>
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={images2 } className="d-block w-100" alt="Panda 1" />
        </div>
        <div className="carousel-item">
          <img src={images2} className="d-block w-100" alt="Panda 2" />
        </div>

        <div className="carousel-item">
          <img src={images2} className="d-block w-100" alt="Panda 2" />
        </div>
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
 

  )
      
       
        
    
}

 
