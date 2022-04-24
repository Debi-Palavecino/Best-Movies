import { BrowserRouter,Routes, Route} from 'react-router-dom';
import MejoresPeliculas from './components/MejoresPeliculas';
import Populares from './components/Populares';
import Busqueda from './components/Busqueda';
import Home from './components/Home';
import Nav from './components/Nav';
import UltimosLanzamientos from './components/UltimosLanzamientos';



const App = ()=>{
 return(
  
    <div >
      <BrowserRouter>
          <Nav />
        
            <Routes>
              <Route path="/" element={<Home/>}/>;
              <Route path="/MejoresPeliculas" element={<MejoresPeliculas/>}/>
              <Route path="/Populares" element={<Populares/>}/> 
              <Route path="/UltimosLanzamientos" element={<UltimosLanzamientos/>}/> 
              <Route path="/Busqueda" element={<Busqueda/>}/>
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}
export default App;
