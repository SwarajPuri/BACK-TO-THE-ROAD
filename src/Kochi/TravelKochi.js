import React, { useReducer} from "react";
import img1 from './sedan.jpg'
import img2 from './SUV.jpg'
import img3 from './Tempo.jpg'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export function Allergy(props) {
  const handleSubmit = (price) => {
    
    let data = { formInput };
    
    
    fetch("http://localhost:3000/car1s", {
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
      "day_agra": "string",
      "desti_agra": "string",
      "price_agra": "string",//can remove from backend or let it be
      "date_agra": "string",
      "cartype_agra": "string",//swaraj ka idea, car type mei price bhjo, so car type pe put a tick
      "city_agra": "KOCHI"
    


      }
  );
    return (
      <div>
        <CardGroup>
  <Card>
    <Card.Img variant="top" src={img1} style={{ height: '22rem' }}/>  
    <Card.Body>
     
      <Card.Title><h1>SEDAN</h1>
      <FormControlLabel
        control={<Checkbox  onChange={handleInput} name="cartype_kochi" value="Sedan-3000"/>}
        label="SEDAN"
        defaultValue={formInput.name}
          
      />
      </Card.Title>
      <Card.Title><h6>PACKAGE FOR 4</h6></Card.Title>
      <Card.Text align="centre-justified">
      <h4 align="justify-centre"><i class="fas fa-wind">  Air conditioned</i><br/>
      
      
      
      <i class="fas fa-rupee-sign"> 3000 Per day</i><br/>
      <i class="fas fa-monument"> Destinations per day </i>
      <Select
          labelId="demo-simple-select-label"
          name="desti_agra"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        > 
          
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          
        </Select><br/>
        <i class="fas fa-calendar-day"> Number of days</i>
        <Select
          labelId="demo-simple-select-label"
          name="day_agra"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        > 
          
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          
        </Select><br/><br/>
        <form > 
        <i class="fas fa-calendar-alt"> Date of travel</i><br/>
      <TextField name="date_agra" id="standard-basic" defaultValue={formInput.name}
          onChange={handleInput}  />
      </form>
        


  
      
      </h4>
      

      
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button onClick={()=>handleSubmit()}>Book your Travel</Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"  src={img2} style={{ height: '22rem' }}/> 
    <Card.Body>
      <Card.Title><h1>SUV</h1>
      <FormControlLabel
        control={<Checkbox  onChange={handleInput} name="cartype_agra" value="SUV-4000"/>}
        label="SUV"
        defaultValue={formInput.name}
          
      /></Card.Title>
      <Card.Title><h6>PACKAGE FOR 7</h6></Card.Title>
      <Card.Text>
      <h4><i class="fas fa-wind">  Air conditioned</i><br/>
      
      <i class="fas fa-rupee-sign"> 4000 Per day</i><br/>
      <i class="fas fa-monument"> Destinations per day</i>
      <Select
          labelId="demo-simple-select-label"
          name="desti_agra"
          defaultValue={formInput.name}
          onChange={handleInput}
        > 
          
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          
        </Select>
        <i class="fas fa-calendar-day"> Number of days</i>
        <Select
          labelId="demo-simple-select-label"
          name="day_agra"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        > 
          
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          
        </Select><br/><br/>
        <form > 
        <i class="fas fa-calendar-alt"> Date of travel</i><br/>
        <TextField name="date_agra" id="standard-basic" defaultValue={formInput.name}
          onChange={handleInput}  />
      </form>
        
      </h4>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button onClick={()=>handleSubmit()} >Book your Travel</Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img3} style={{ height: '22rem' }}/>
    <Card.Body>
      <Card.Title><h1>TEMPO TRAVELLER
        </h1>
        <FormControlLabel
        control={<Checkbox  onChange={handleInput} name="cartype_agra" value="TEMPOTRAVELLER-5000"/>}
        label="TEMPO TRAVELLER"
        defaultValue={formInput.name}
          
      /></Card.Title>
      <Card.Title><h6>PACKAGE FOR 12</h6></Card.Title>
      <Card.Text>
      
      <h4 ><i class="fas fa-wind">  Air conditioned</i><br/>
      
      <i class="fas fa-rupee-sign"> 5000 Per day</i><br/>
      <i class="fas fa-monument"> Destinations per day</i>
      <Select
          labelId="demo-simple-select-label"
          name="desti_agra"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        > 
          
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          
          
        </Select>
        <i class="fas fa-calendar-day"> Number of days</i>
        <Select
          labelId="demo-simple-select-label"
          name="day_agra"
          id="demo-simple-select"
          defaultValue={formInput.name}
          onChange={handleInput}
        > 
          
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          
        </Select><br/><br/>
        <form > 
        <i class="fas fa-calendar-alt"> Date of travel</i><br/>
        <TextField name="date_agra" id="standard-basic" defaultValue={formInput.name}
          onChange={handleInput}  />
      </form>
      </h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button onClick={()=>handleSubmit()}>Book your Travel</Button></small>
    </Card.Footer>
  </Card>
</CardGroup>
          
      </div>
    );
  }


export default Allergy;