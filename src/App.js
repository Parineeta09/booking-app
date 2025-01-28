import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Hotel2 from "./pages/hotel2/Hotel2";
import Hotel3 from "./pages/hotel3/Hotel3";
import Hotel4 from "./pages/hotel4/Hotel4";
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/id" element={<Hotel/>}/>
        <Route path="/id2" element={<Hotel2/>}/>
        <Route path="/id3" element={<Hotel3/>}/>
        <Route path="/id4" element={<Hotel4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 