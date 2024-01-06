import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Cv from './components/cv/Cv.jsx';
import Projects from './components/project/Projects.jsx';
import Description from './components/description/Description.jsx';
import Home from './pages/home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App >
        <Home />
        <Description />
        <Projects />
        <Cv />
      </App>
    ),
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
