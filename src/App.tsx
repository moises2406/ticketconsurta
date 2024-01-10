import "./App.css";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import DoctorBoar from "./screen/DoctorBoar";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import QRcode from "./screen/QRcode";
import Notification from "./screen/Notification";
import CreateUserDate from "./screen/CreateUserDate";
import Nv2 from "./components/Nv2";
import EditUserDate from "./screen/EditUserDate";



function App() {

  //console.log(new Date().toLocaleDateString());
  //console.log(new Date().toLocaleTimeString());
  

  return (
    <BrowserRouter>
    <Nv2/>
     
     <Routes>
        <Route path="/" element={<h1>hola</h1>} />
        <Route path="/boar" element={ <DoctorBoar />} />
        <Route path="/QRcode" element={ <QRcode />} />
        <Route path="/Notification" element={ <Notification />} />
        <Route path="/user/:id" element={ <CreateUserDate />} />
        <Route path="/userEdit/:id" element={ <EditUserDate />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
