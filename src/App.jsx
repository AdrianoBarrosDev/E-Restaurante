import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000, // duração da animação em ms
      once: true,     // anima só uma vez (false = repete ao rolar)
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
