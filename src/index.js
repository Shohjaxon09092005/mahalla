import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import MahallaAbout from './pages/MahallaAbout';
import Rahbariyat from './pages/Rahbariyat';
import Yangiliklar from './pages/Yangiliklar';
import Contact from './pages/Contact';
import Tadbirlar from './pages/Tadbirlar';
import Hujjatlar from './pages/Hujjatlar';
import NewsAbout from './components/NewsAbout';
import YettilikApp from './pages/YettilikApp';
const appRouter = createBrowserRouter([{
  element: <App />,
  path: "/",
  errorElement: <ErrorPage />,
  children: [{
    path: "/",
    element: <Home />

  },
  {
    path: "/mahallaAbout",
    element: <MahallaAbout />
  },
  {
    path: "/rahbariyat",
    element: <Rahbariyat/>
  },
  {
    path: "/yangiliklar",
    element: <Yangiliklar/>
  },
  {
    path: "/tadbirlar",
    element: <Tadbirlar/>
  },
  {
    path: "/hujjatlar",
    element: <Hujjatlar/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/newsAbout/:ID",
    element: <NewsAbout/>
  },
  {
    path: "/yettilik/:ID",
    element: <YettilikApp/>
  },
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

