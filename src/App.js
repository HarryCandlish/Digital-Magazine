import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import SinglePost from './pages/SinglePost'

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/post/:slug' element={<SinglePost/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
