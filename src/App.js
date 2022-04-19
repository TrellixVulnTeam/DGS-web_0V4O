import React  from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/Home/pages/About'
import News from './components/Home/pages/News';
import Admin from './components/Admin/Admin'
import SubPage from './components/Home/pages/SubPage';
import { useLocation } from 'react-router-dom';
import './App.css';


function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function App() {
  let query = useQuery();
  let id = query.get('id');
  return (   
       <>
         <Navbar />
          <Routes>
            <Route exact path='/'  element={<News />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/admin' element={<Admin />}/>
            <Route exact path={`/news/subpage/`} element={<SubPage id={id}/>} />
          </Routes>
        <Footer />
        </>
  );
}

export default App;
