import React from 'react';

import img2 from "./Jaipur/Hawa_Mahal_Final_1.jpg"
import img from "./Agra/AgraImage6.jpg"
import img4 from "./Goa/CalanguteBeach.jpg"
import img5 from "./Kochi/SantaCruzBasilica.png"
import img6 from "./NewDelhi/RedFort.png"
import img7 from "./Shimla/GreenValley.png";
import img8 from "./Hyderabad/TheCharminar.png"
import img3 from "./Ladakh/PangongTsoLake.png"

function Card(props) {
  return (
  
    <div>
      
    <ul>
      <li className="card-container">
      <img className="card-image" style={{ height: '14rem' }}src={props.src} alt="" />
				
        <div className="card-container--content">
          <h3 className="card-header--title">{props.heading}</h3>
         
         
          <a href={props.link} class="btn btn-outline-warning">
            Explore
          </a>
        </div>
       
      </li>
    </ul>
    </div>

  );
}

export default function CardList(props) {
  return (
    <div>
    <div className="card-masonry">
      <Card
        heading="Agra"
        
        src={img}
        link="/agra"
        
      />
      <Card
        heading="Jaipur"
        src={img2}
        link="/jaipur"
      />
       <Card
        heading="Ladakh"
       src={img3}
       link="/ladakh"
        
      />
      <Card
        heading="Goa"
        src={img4}
        link="/goa"
      />
    </div>
     <div className="card-masonry">
     <Card
       heading="Kochi"
       link="/kochi"
       src={img5}
       
     />
     <Card
       heading="New Delhi"
       src={img6}
       link="/newDelhi"
     />
      <Card
       heading="Shimla"
       link="/shimla"
       src={img7}
       
     />
     <Card
       heading="Hyderabad"
       src={img8}
       link="/hyderabad"
       style={{ height: '22rem' }}
     />
   </div>
   </div>
  );
}