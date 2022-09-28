
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Routing from './Routing/Routing';
import { NavData } from './Static-Data/NavData';


function App() {
  return (
   
  <BrowserRouter>
   <Routing Navdata={NavData}/>
   <Footer/>
   </BrowserRouter>
  
  
  );
}

export default App;
