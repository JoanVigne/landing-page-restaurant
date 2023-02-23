import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Comments from './pages/Comments';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css'
import Order from './pages/Order';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Comments",
    element: <Comments />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Order",
    element: <Order />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


