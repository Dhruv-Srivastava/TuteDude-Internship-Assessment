import Navbar from "./components/Navbar";
import "./App.css"
import ReferEarnMain from "./components/ReferEarnMain";
import ReferedMain from "./components/ReferredMain";
import {Routes,Route} from "react-router-dom"
export default function App(){
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReferEarnMain />}/>
        <Route path="/friends-referred" element={<ReferedMain />} />
      </Routes>
    </>
  )
}