import React from "react";
import { Container, Row, Col,} from "reactstrap";
import ShimlaCarousel from "./ShimlaCarousel";


import imgCard6 from "./ShimlaImage6.jpg"

import Activity from"./Activity_Shimla.js"
import Culture from"./Culture.js"
const Shimla1= () => (
    <div><div classNmae="PageLayout">
      <h1 style={{ fontFamily: 'Times New Romon' , color: "" ,fontSize:50}}>SHIMLA</h1>
  <div className="subComponent" >
    <section className="tour-cover item-center">
        <img src={imgCard6} alt="" />
       </section>
    <Container>
      <section>
        <Row sm="8">
          <Col sm="8">
      <ShimlaCarousel/>
            
          </Col>
          <Col sm="4">
  <h6 align="centre"style={{ fontFamily: 'Patrick Hand SC' , color: "#b13434" }}><br/><br/><br/>Snow-capped Himalayan peaks, green pastures and dense cedar forests surround Shimla, the capital of Himachal Pradesh. Colonial-era buildings, bustling bazaars, vibrant local life and quaint little shops add to the lure of this charming hill station. Shop for local handicrafts, stroll along the famous Mall Road or sample delectable eats at local restaurants—there is so much to keep you occupied in Shimla.<br/>
        <br/>
 <br/>
       Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. <br/>Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. <br/>It’s also known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing in wooden toys and crafts.
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
<iframe width="853" height="480" src="https://www.youtube.com/embed/awCNCZWdeEM" frameborder="0" allowfullscreen ng-show="showvideo"></iframe>
<div className="Activities"><h1>CULTURE</h1>

      <Culture/>
      
<br/>
</div>

    
    
  </div>
  
    </div>
    
    </div>
);

export default Shimla1;