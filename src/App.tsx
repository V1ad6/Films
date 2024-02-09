import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import { getUpcomingList } from './store/actionCreators/upcoming';
import { getRecomendedList } from './store/actionCreators/recomended';
import './scss/App.scss';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FilmPage from './pages/FilmPage';
import AboutPage from './pages/AboutPage';

function App() {
  const dispatch = useDispatch();
  const [opened, setOpened] = useState<boolean>(false);
  const head = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toggleMenu = (): void => setOpened(prev => !prev);

  useEffect(() => {
    setIsLoading(true);

    document.addEventListener('scroll', (): void => { 
      if (window.pageYOffset > 456) {
        head.current?.classList.add('hat_scrolled');
        box.current?.classList.add('box_hold');
      } else {
        head.current?.classList.remove('hat_scrolled');
        box.current?.classList.remove('box_hold');
      }
    });

    dispatch(getUpcomingList() as any);
    dispatch(getRecomendedList() as any);
    
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="App">
      <Router>
        <NavMenu toggleMenu={toggleMenu} opened={opened}/>
        <Header toggleMenu={toggleMenu} references={{head, box}}/>
        {isLoading && <Preloader/>}
        
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/film' element={<FilmPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>

        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
