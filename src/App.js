import './App.css';
import Hero from './Hero.js'
import Footer from './Footer.js'
import Radisson from "./Agra/RadissonBlue.js"
import Le from "./Agra/lemeridian.js"
import Vivanta from "./Agra/vivanta.js"
import Card from './card-ui'
import Navbar from './Navbar.js';
import PersonalInfo from './Form.js'
import { BrowserRouter as Router,Switch} from "react-router-dom";
import Jaipur from "./Jaipur/Navbar1.js";
import Agra from "./Agra/Navbar1.js";
import AgraHotel from "./Agra/HotelAgra.js";
import Route from 'react-router-dom/Route';
import Kochi from "./Kochi/Navbar1.js";
import Ladakh from "./Ladakh/Navbar1.js";
import NewDelhi from "./NewDelhi/Navbar1.js";
import Shimla from "./Shimla/Navbar1.js";
import Goa from "./Goa/Navbar1.js";
import Hyderabad from "./Hyderabad/Navbar1.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home.js';
import BookingConfirmation from './Bookingnavbar1.js'



import GINGERGoaPanjim from "./Goa/GINGER Goa Panjim.js"
import ResorteMarinhaDourada from "./Goa/Resorte Marinha Dourada.js"
import TheSeaHorseResort from "./Goa/The Sea Horse Resort.js"

import LemonTreePremierHitec from "./Hyderabad/Lemon Tree Premier Hitec.js"
import RadissonBluPlaza from "./Hyderabad/Radisson Blu Plaza.js"
import Novotel from "./Hyderabad/Novotel.js"

import HiltonJaipur from "./Jaipur/Hilton Jaipur"
import IHGHotel from "./Jaipur/IHG Hotel"
import HMarriottHotel from "./Jaipur/Marriott Hotel"

import CrownePlaza from "./Kochi/Crowne Plaza"
import HotelAirlinkCastle from "./Kochi/Hotel Airlink Castle"
import TajMalabarResort from "./Kochi/Taj Malabar Resort"

import HotelNatureResidency from "./Ladakh/Hotel Nature Residency"
import HotelSpicNSpan from "./Ladakh/Hotel Spic N Span"
import TheIndusValley from "./Ladakh/The Indus Valley"

import RoseateHouse from "./NewDelhi/Roseate House"
import TheOberoiNewDelhi from "./NewDelhi/The Oberoi New Delhi"
import Vivanta2 from "./NewDelhi/Vivanta"

import TajTheogResort from "./Shimla/Taj Theog Resort"
import TheWhiteHavenHomestay from "./Shimla/The White Haven Homestay"
import WoodVistaCottages from "./Shimla/WoodVista Cottages"


        




function App() {
  return (
  <div className="App">
     <Navbar/>
     <Router>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/card" component={Card}/>
        <Route exact path="/hero" component={Hero}/>
        <Route exact path="/form" component={PersonalInfo}/>
        <Route exact path="/footer" component={Footer}/>
        <Route exact path="/navbar" component={Navbar}/>
        <Route exact path="/jaipur" component={Jaipur}/>
        <Route exact path="/agra" component={Agra}/>
        <Route exact path="/radisson" component={Radisson}/>
        <Route exact path="/lemeridian" component={Le}/>
        <Route exact path="/vivanta" component={Vivanta}/>
        <Route exact path="/agra_hotel" component={AgraHotel}/>
        <Route exact path="/kochi" component={Kochi}/>
        <Route exact path="/ladakh" component={Ladakh}/>
        <Route exact path="/newDelhi" component={NewDelhi}/>
        <Route exact path="/shimla" component={Shimla}/>
        <Route exact path="/goa" component={Goa}/>
        <Route exact path="/hyderabad" component={Hyderabad}/>

        <Route exact path="/gINGERGoaPanjim" component={GINGERGoaPanjim}/>
        <Route exact path="/resorteMarinhaDourada" component={ResorteMarinhaDourada}/>
        <Route exact path="/theSeaHorseResort" component={TheSeaHorseResort}/>
        
        <Route exact path="/lemonTreePremierHitec" component={LemonTreePremierHitec}/>
        <Route exact path="/radissonBluPlaza" component={RadissonBluPlaza}/>
        <Route exact path="/novotel" component={Novotel}/>
        
        <Route exact path="/hiltonJaipur" component={HiltonJaipur}/>
        <Route exact path="/iHG" component={IHGHotel}/>
        <Route exact path="/marriottHotel" component={HMarriottHotel}/>
 
        <Route exact path="/crownePlaza" component={CrownePlaza}/>
        <Route exact path="/hotelAirlinkCastle" component={HotelAirlinkCastle}/>
        <Route exact path="/tajMalabarResort" component={TajMalabarResort}/>             
  
        <Route exact path="/tHotelNatureResidency" component={HotelNatureResidency}/>
        <Route exact path="/hotelSpicNSpan" component={HotelSpicNSpan}/>
        <Route exact path="/theIndusValley" component={TheIndusValley}/>             
 
        <Route exact path="/roseateHouse" component={RoseateHouse}/>
        <Route exact path="/theOberoiNewDelhi" component={TheOberoiNewDelhi}/>
        <Route exact path="/vivanta1" component={Vivanta2}/> 

         
        <Route exact path="/tajTheogResort" component={TajTheogResort}/>
        <Route exact path="/theWhiteHavenHomestay" component={TheWhiteHavenHomestay}/>
        <Route exact path="/WoodVistaCottages" component={WoodVistaCottages}/> 
        
        <Route exact path="/booking" component={BookingConfirmation}/>
        </Switch>
        </Router>
        <Footer/>
    </div>
);
}

export default App;
