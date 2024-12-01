import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import PetList from "./components/petList"
import LandingPage from "./components/LandingPage"
import PetForm from "./components/PetForm"
import Layout from "./components/Layout"

export default () => {
  return (
    <Router>

     <Routes>
     <Route  path="/" element= {<Layout/>}>
     <Route  index element = {<LandingPage/>}></Route>
      <Route path= "/form" element = {<PetForm/>}></Route>
     <Route  path ="/pets" element = {<PetList/>}></Route>
      </Route>
      
     </Routes>
 
    </Router>
  )
}