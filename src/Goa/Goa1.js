import React from "react";
import { Container, Row, Col,} from "reactstrap";
import GoaCarousel from "./GoaCarousel";
import imgCard1 from "./CalanguteBeach.jpg"
import imgCard2 from "./ChurchofOurLadyoftheImmaculateConception.png";
import imgCard3 from "./DudhsagarFalls.png"
import imgCard4 from "./MahadevTempleGoa.png"
import imgCard6 from "./BasilicadeBomJesus.png";


import Activity from"./Activity_Goa.js"
import Culture from"./Culture.js"
const Goa1= () => (
    <div><div classNmae="PageLayout">
      <h1 style={{ fontFamily: 'Times New Romon' , color: "" ,fontSize:50}}>GOA</h1>
  <div className="subComponent" >
    <section className="tour-cover item-center">
        <img src={imgCard6} alt="" />
       </section>
    <Container>
      <section>
        <Row sm="8">
          <Col sm="8">
      <GoaCarousel/>
            
          </Col>
          <Col sm="4">
  <h6 align="centre"style={{ fontFamily: 'Patrick Hand SC' , color: "#b13434" }}><br/><br/><br/> Goa – the name is enough is to fill you with excitement & thrill and bring smile on your face. With surreal evenings, exotic nightlife, inspiring mornings and charming beaches, the place hypnotizes every soul and makes people fall for it.<br/>
 <br></br>
<br/>
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
<iframe width="853" height="480" src="https://www.youtube.com/embed/SQR52fIOHtw" frameborder="0" allowfullscreen ng-show="showvideo"></iframe>
<div className="Activities"><h1>CULTURE</h1>

      <Culture/>
      
<br/>
</div>

    
    
  </div>
  
    </div>
    
    </div>
);

export default Goa1;