import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Cv from './pages/cv/Cv.jsx';
import Projects from './pages/project/Projects.jsx';
import Description from './pages/description/Description.jsx';
import Home from './pages/home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
      path: "/description",
      element: <Description />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/cv",
      element: <Cv />,
    },
   ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
