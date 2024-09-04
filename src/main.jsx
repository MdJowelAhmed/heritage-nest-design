import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './page/landing/Landing.jsx';
import Buyer from './page/buyer/Buyer.jsx';
import SearchResult from './page/searchResult/SearchResult.jsx';
import PropertyDetails from './page/propertyDetails/PropertyDetails.jsx';
import About from './page/about/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/buyer",
    element: <Buyer />,
  },
  {
    path: "/search",
    element: <SearchResult />,
  },
  {
    path: "/details",
    element: <PropertyDetails />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
