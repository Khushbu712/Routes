import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Item from './pages/Item';

function App() {
  const [page,setPage] = useState('home');
  return (
    <>
    <Navbar setPage={setPage}/>
    {page === "home"&& <Home/>}
    {page === "about" && <About/>}
    {page === "items" && <Item/>}
    </>
  )
}

export default App;
