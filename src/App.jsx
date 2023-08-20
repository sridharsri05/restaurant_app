import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation';
import Menu from './components/Menu';


function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes >
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/menu' element={<Menu />}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
