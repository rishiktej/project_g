import "./App.css";
import Signin from "./signin/signin_form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Signin />} />
    //   </Routes>
    // </BrowserRouter>
    <Signin />
  );
}

export default App;
