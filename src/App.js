
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
     <Header/>
     <Outlet/>
     <Footer/>
    </div>
  );
}

export default App;
