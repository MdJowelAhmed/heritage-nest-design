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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
