import React from "react";
import { Container, Row, Col,} from "reactstrap";
import NewDelhiCarousel from "./NewDelhiCarousel";


import imgCard6 from "./NewDelhiImage5.jpg"

import Activity from "./Activity_Delhi.js"
import Culture from "./Culture.js"
const NewDelhi1= () => (
    <div><div classNmae="PageLayout">
      <h1 style={{ fontFamily: 'Times New Romon' , color: "" ,fontSize:50}}>NEWDELHI</h1>
  <div className="subComponent" >
    <section className="tour-cover item-center">
        <img src={imgCard6} alt=""   style={{ height: '50rem' }}/>
       </section>
    <Container>
      <section>
        <Row sm="8">
          <Col sm="8">
      <NewDelhiCarousel/>
            
          </Col>
          <Col sm="4">
  <h6 align="centre"style={{ fontFamily: 'Patrick Hand SC' , color: "#b13434" }}><br/><br/><br/> If you are born in Delhi or have lived in this city for long, no place on the earth can appeal you now. Delhi is not only the capital of India rather it is a destination where you can enjoy the most sophisticated lifestyle as well as survive an underprivileged routine<br/>
      <br/>
       New Delhi is the capital of India and an administrative district of NCT Delhi. <br/>New Delhi is also the seat of all three branches of the government of India, hosting the Rashtrapati Bhavan, Parliament House, and the Supreme Court of India.
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
<iframe width="853" height="480" src="https://www.youtube.com/embed/FP7vnV1pJ4I" frameborder="0" allowfullscreen ng-show="showvideo"></iframe>
<div className="Activities"><h1>CULTURE</h1>

      <Culture/>
      
<br/>
</div>

    
    
  </div>
  
    </div>
    
    </div>
);

export default NewDelhi1;