import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./componets/home"
import About from "./componets/about"
import Contact from "./componets/contact"
import User from "./componets/users"
import Car from "./componets/showroom/carmodel"
import Bike from "./componets/showroom/bikemodel"
import Login from "./componets/loginroute/userlogin"
import LoginedUser from "./componets/loginroute/userlist"


function App() {
  return(
    <>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/about">About</Link></li>
          {/*route show the user base section without rerender the web page */}
          <li><Link to="/user/1">user-1</Link></li>
          <li><Link to="/user/2">user-2</Link></li>
          {/* nested route */}
          <li><Link to="/showroom/car">Car</Link></li>
          <li><Link to="/showroom/bike">Bike</Link></li>
          <li><Link to="/userlogin">Login</Link></li>

        </ul>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/contact" element={<Contact></Contact>}/>
          <Route path="/user/:id" element={<User></User>}/>
          {/* nested route */}
          <Route path="/showroom">
            <Route path="car" element={<Car></Car>}/>
            <Route path="bike" element={<Bike></Bike>}/>
          </Route>
          /*login-route*/
          <Route path="/userlogin" element={<Login></Login>}></Route>
          <Route path="/userlist" element={<LoginedUser></LoginedUser>}></Route>
        </Routes>
      
      
      </BrowserRouter>
    </>
  )

}

export default App
