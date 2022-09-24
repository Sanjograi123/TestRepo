
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routing/Routing';

import { NavData } from './Static-Data/NavData';


function App() {
  return (
   
  <BrowserRouter>
   <Routing Navdata={NavData}/>
   
   </BrowserRouter>
  
  
  );
}

export default App;
