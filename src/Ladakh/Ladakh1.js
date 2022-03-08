import React from "react";
import { Container, Row, Col,} from "reactstrap";
import LadakhCarousel from "./LadakhCarousel";


import imgCard6 from "./LadakhImage6.jpg"

import Activity from"./Activity_Ladakh.js"
import Culture from"./Culture.js"
const Ladakh1= () => (
    <div><div classNmae="PageLayout">
      <h1 style={{ fontFamily: 'Times New Romon' , color: "" ,fontSize:50}}>LADAKH</h1>
  <div className="subComponent" >
    <section className="tour-cover item-center">
        <img src={imgCard6} alt="" />
       </section>
    <Container>
      <section>
        <Row sm="8">
          <Col sm="8">
      <LadakhCarousel/>
            
          </Col>
          <Col sm="4">
  <h6 align="centre"style={{ fontFamily: 'Patrick Hand SC' , color: "#b13434" }}><br/><br/><br/> Welcome to Ladakh (8N/9D) | Ladakh Residency. A great introduction to ladakh to the first time travelers- this trip takes you on a roller coaster of a ride through the length and breadth of the region- visiting lesser visited areas, as well as the more popular tourist spots.<br/>
        <br/>
 <br/>
       Ladakh is a region administered by India as a union territory, and constitutes a part of the larger Kashmir region, which has been the subject of dispute between India, Pakistan, and China since 1947. <br/>
 <br/>
 It was established on 31 October 2019, following the passage of the Jammu and Kashmir Reorganisation Act. 
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
<iframe width="853" height="480" src="https://www.youtube.com/embed/AK-MUzWdpjU" frameborder="0" allowfullscreen ng-show="showvideo"></iframe>
<div className="Activities"><h1>CULTURE</h1>

      <Culture/>
      
<br/>
</div>

    
    
  </div>
  
    </div>
    
    </div>
);

export default Ladakh1;