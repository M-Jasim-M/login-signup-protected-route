import logo from './logo.svg';
import './App.css';
import Login from './componnents/Loginwithhgoogle';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Dashboard from './componnents/Dashboard';

function App() {
  return (
   <>
   <BrowserRouter>
<Routes>

  <Route path='/' element={<Login/>}/>

  <Route path='/dashboard' element={<Dashboard/>}/>

</Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
