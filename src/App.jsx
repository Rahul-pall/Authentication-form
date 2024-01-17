import './App.css'
import Home from './components/Home';
import Login from './components/Login'
import Registration from './components/Registration';
import { BrowserRouter,Routes,Router,Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registration' element={<Registration/>}/>
     </Routes>
    </>
  )
}

export default App
