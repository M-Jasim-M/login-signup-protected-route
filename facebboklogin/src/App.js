import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Home from './Components/Home/Home';

function App() {



  return (
   <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
</Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
