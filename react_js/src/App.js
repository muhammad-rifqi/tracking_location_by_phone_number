import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Error404 from './component/error404';
import Nav from './component/Nav';

function App() {
  
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="*" element={<Error404/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
