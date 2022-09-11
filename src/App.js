import {useRef} from "react"
import { Route, Routes } from "react-router-dom";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Home from "./components/Home";
import MapFilInput from "./components/MapFilInput";
import PageNotFound from "./components/PageNotFound";
function App() {
 

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/basic" element={ <MapFilInput/>}/>
          <Route path="/comp1" element={ <Comp1/>}/>
          <Route path="/comp2" element={ <Comp2/>}/>
          <Route path="/comp3" element={ <Comp3/>}/>
          <Route path="/*" element={ <PageNotFound/>}/>
        </Routes>
       
      </div>
    </>
  );
}

export default App;
