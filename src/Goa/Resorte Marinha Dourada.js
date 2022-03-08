import React, { useReducer} from "react";
import Carousel from 'react-bootstrap/Carousel'
import img1 from './Mari2.jpg'
import img2 from './Mari5.jpg'
import img3 from './Mari6.jpg'

import Table from 'react-bootstrap/Table' 
import Button from 'react-bootstrap/Button' 
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Container} from "reactstrap";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export function Allergy(props) {
  
  const handleSubmit = (price) => {
    
    let data = { formInput };
    
    
    fetch("http://localhost:3000/hotel1s", {
      method: "POST",
      body: JSON.stringify(data.formInput),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
      
  };
 const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      "price_agra": "string",
      "ppl_agra": "string",
      "days_agra": "string",
      "hotel_agra":"GINGER Goa Panjim",
      "city_agra":"GOA"

    


      }
  );
  
    return (
      <div>
        <h1>........</h1>
          <h1 align="centre">Resorte Marinha Dourada</h1>
          <div>
            <Container>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      style={{ height: '35rem' }}
    />
    <Carousel.Caption>
      <h3>ECONOMY</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      style={{ height: '35rem' }}
      
    />

    <Carousel.Caption>
      <h3>DELUXE</h3>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      style={{ height: '35rem' }}
    />

    <Carousel.Caption>
      <h3>SUITE</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container> 
      </div>
      <div>
          
          <br/>
          <br/>
      <div className="Table">
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Type of Room</th>
      <th>Amenities</th>
      <th>Price</th>
      <th>People Staying</th>
      <th>Days</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
  
    <tr>
    
      <td>
      
      <FormControlLabel
        control={<Checkbox  onChange={handleInput} name="price_goa" value="Economy-3450"/>}
        label="Economy"
        defaultValue={formInput.name}
          
      />

      </td>
      <td><i class="fas fa-wifi" > &nbsp; &nbsp;</i><i class="fas fa-mug-hot" >&nbsp; &nbsp;</i><i class="fas fa-bed" > &nbsp; &nbsp; </i></td>
      <td>3450</td>
      <td>
      <Select
          labelId="demo-simple-select-label"
          name="ppl_goa"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </td>
      <td>
        
      <Select
          labelId="demo-simple-select-label"
          name="days_goa"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </td>
      
      <td><Button as="input" type="button" value="Confirm Booking" onClick={()=>handleSubmit()} /></td>
      
    </tr>
     
    <tr>
      <td>
      <FormControlLabel
        control={<Checkbox  onChange={handleInput} name="price_goa" value="Deluxe-5000"/>}
        label="Deluxe"
        defaultValue={formInput.name}
          
      />
      </td>
      <td><i class="fas fa-wifi" > &nbsp; &nbsp;</i><i class="fas fa-mug-hot" >&nbsp; &nbsp;</i><i class="fas fa-bed" > &nbsp; &nbsp; </i><i class="fas fa-hot-tub" > &nbsp; &nbsp; </i></td>
      <td>5000</td>
      <td>
      <Select
          labelId="demo-simple-select-label"
          name="ppl_goa"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          
        </Select>
      </td>
      <td><Select
          labelId="demo-simple-select-label"
          name="days_goa"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select></td>
     
      <td><Button as="input" type="button" value="Confirm Booking" onClick={()=>handleSubmit()} /></td>
    </tr>
    <tr>
    <td>
    <FormControlLabel
        control={<Checkbox  onChange={handleInput} name="price_goa" value="Suite-8000"/>}
        label="Suite"
        defaultValue={formInput.name}
          
      />
    </td>
      <td><i class="fas fa-wifi" > &nbsp; &nbsp;</i><i class="fas fa-mug-hot" >&nbsp; &nbsp;</i><i class="fas fa-bed" > &nbsp; &nbsp; </i><i class="fas fa-hot-tub" > &nbsp; &nbsp; </i><i class="fas fa-concierge-bell" >&nbsp; &nbsp;</i></td>
      <td>8000</td>
      <td>
      <Select
          labelId="demo-simple-select-label"
          name="ppl_goa"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          
        </Select>
      </td>
      <td><Select
          labelId="demo-simple-select-label"
          name="days_goa"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select></td>
      
      <td><Button as="input" type="button" value="Confirm Booking" onClick={()=>handleSubmit()} /></td>
    </tr>
  </tbody>
</Table>
      </div>
      </div>
          
      </div>
    );
  }



export default Allergy;