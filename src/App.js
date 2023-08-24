import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import FirstComp from './components/first-comp';
// import SecondComp from './components/second';
// import StyleComp from './components/styleComp';
import Box from './components/Box';
import Count from './components/counter';
import Contact from './components/contact';
import About from './components/about';
import Navbar from './components/navbar';
import ParentComp from './components/parentcomp';
import SinglePost from './components/singlepost';

function App() {
  return (
    <div className="App">
       {/* <FirstComp/> */}
      {/* <SecondComp/> */}
   {/* <StyleComp/> */}
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Box />}/>
        <Route path='/counter' element={<Count />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/props' element={<ParentComp />}/>
        <Route path='posts/:id' element={<SinglePost />}/>
     
        
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
