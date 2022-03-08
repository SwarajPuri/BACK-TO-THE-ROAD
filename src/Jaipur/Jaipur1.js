import React from "react";
import { Container, Row, Col,} from "reactstrap";
import JaipurCarousel from "./JaipurCarousel";


import imgCard6 from "./JaipurImage6.jpg"

import Activity from"./Activity_Jaipur.js"
import Culture from"./Culture.js"
const Jaipur= () => (
    <div><div classNmae="PageLayout">
      <h1 style={{ fontFamily: 'Times New Romon' , color: "" ,fontSize:50}}>JAIPUR</h1>
  <div className="subComponent" >
    <section className="tour-cover item-center">
        <img src={imgCard6} alt="" />
       </section>
    <Container>
      <section>
        <Row sm="8">
          <Col sm="8">
      <JaipurCarousel/>
            
          </Col>
          <Col sm="4">
  <h6 align="centre"style={{ fontFamily: 'Patrick Hand SC' , color: "#b13434" }}><br/><br/><br/><br/><br/> Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India. Renowned globally for its coloured gems, the capital city of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis. The bustling modern city is one of the three corners of the golden triangle that includes Delhi, Agra and Jaipur. <br/>
  <br/>
       Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. <br/> At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.
   
              </h6>
             
          </Col>
        </Row>
      </section>
      </Container>
      <br/>
      <br/>
      <div className="Activities"><h1>PLACES TO VISIT</h1>
      <Activity/>
<br/>
</div>
<iframe width="853" height="480" src="https://www.youtube.com/embed/ZC4msp1UG08" frameborder="0" allowfullscreen ng-show="showvideo"></iframe>
<div className="Activities"><h1>CULTURE</h1>

      <Culture/>
      
<br/>
</div>

    
    
  </div>
  
    </div>
    
    </div>
);

export default Jaipur;