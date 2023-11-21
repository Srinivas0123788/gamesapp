import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup";
import App from "../App";
import Login from "./Login";
import Carousel from "./Carousel";
import GameDetails from "./GameDetails";
import Verification from "./verification";


 
function MyRouter() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Carousel/>}></Route>
        <Route path="/games" element={<App/>}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/carousel" element={<Carousel/>}></Route>
        <Route path="/games/:id" element={<GameDetails />}></Route>
        <Route path="/verification" element={<Verification />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}
 
export default MyRouter;
