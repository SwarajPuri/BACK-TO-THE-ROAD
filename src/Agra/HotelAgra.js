import React, { Component } from 'react';
import img1 from './HOTEL1AGRA.jpg'
import img2 from './Lemeridian.jpg'
import img3 from './Vivanta.jpg'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
class Hotel_Agra extends Component {
  render() {
    return (
      <div>
        <CardGroup>
  <Card>
    <Card.Img variant="top" src={img1} style={{ height: '22rem' }}/>  
    <Card.Body>
     
      <Card.Title><h1>Radisson Blue</h1></Card.Title>
      <Card.Text align="centre-justified">
      <h4 align="justify-centre"><i class="fas fa-swimming-pool">    2 Swimming Pools</i><br/>

      
      <i class="fas fa-shuttle-van">     Airport Shuttle</i><br/>
      <i class="fas fa-wine-glass"> Resto & Bar</i>
      </h4>
      

      
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/radisson">Book your stay</Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"  src={img2} style={{ height: '22rem' }}/> 
    <Card.Body>
      <Card.Title><h1> LE Meridian</h1></Card.Title>
      <Card.Text>
      <h4><i class="fas fa-spa">    Spa</i><br/>
      <i class="fas fa-swimming-pool">    1 Swimming Pool</i><br/>
      <i class="fas fa-shuttle-van">     Airport Shuttle</i><br/><br/></h4>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/lemeridian">Book your stay</Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img3} style={{ height: '22rem' }}/>
    <Card.Body>
      <Card.Title><h1>Vivanta By Taj</h1></Card.Title>
      <Card.Text>
      
      <h4 ><i class="fas fa-swimming-pool" >    1 Swimming Pool</i><br/>
      <i class="fas fa-dumbbell">    Gym</i><br/>
      <i class="fas fa-bus-alt">    City Tour</i> <br/>
      <i class="fas fa-spa">    Spa</i><br/>




      </h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/vivanta">Book your stay</Button></small>
    </Card.Footer>
  </Card>
</CardGroup>
          
      </div>
    );
  }
}

export default Hotel_Agra;