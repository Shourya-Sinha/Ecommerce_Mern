import './App.css'
// import {faker} from '@faker-js/faker';
// import{ Box} from '@mui/material';
// import {Heart} from '@phosphor-icons/react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import OurStore from './Pages/OurStore.jsx';


function App() {


  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='store' element={<OurStore />} />
      </Route>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
