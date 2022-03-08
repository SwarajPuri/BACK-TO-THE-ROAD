import React from "react";
import { Container, Row, Col,} from "reactstrap";
import KochiCarousel from "./KochiCarousel";


import imgCard6 from "./KochiImage6.jpg"

import Activity from"./Activity_Kochi.js"
import Culture from"./Culture.js"
const Kochi1= () => (
    <div><div classNmae="PageLayout">
      <h1 style={{ fontFamily: 'Times New Romon' , color: "" ,fontSize:50}}>KOCHI</h1>
  <div className="subComponent" >
    <section className="tour-cover item-center">
        <img src={imgCard6} alt="" />
       </section>
    <Container>
      <section>
        <Row sm="8">
          <Col sm="8">
          <KochiCarousel/>
            
          </Col>
          <Col sm="4">
  <h6 align="centre"style={{ fontFamily: 'Patrick Hand SC' , color: "#b13434" }}><br/><br/><br/> Situated on the south-west coast of the Indian Peninsula is Kerala, dubbed as god’s own country. In the district of Ernakulam and almost in the middle of this breathtakingly spectacular and prosperous state lies one of its biggest cities, Kochi.Over the years it has become a bustling tourist hotspot with an array of things to see, do and eat. Some of the major tourist attractions are its historical monuments, enchanting backwaters, Chinese fishing nets, palaces etc. <br/>
        <br/>
 Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. <br/> It has been a port since 1341, when a flood carved out its harbor and opened it to Arab, Chinese and European merchants. <br/>Sites reflecting those influences include Fort Kochi, a settlement with tiled colonial bungalows and diverse houses of worship. <br/> Cantilevered Chinese fishing nets, typical of Kochi, have been in use for centuries.
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
<iframe width="853" height="480" src="https://www.youtube.com/embed/09llwvVxaT4" frameborder="0" allowfullscreen ng-show="showvideo"></iframe>
<div className="Activities"><h1>CULTURE</h1>

      <Culture/>
      
<br/>
</div>

    
    
  </div>
  
    </div>
    
    </div>
);

export default Kochi1;