import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './pages/Home/Home.jsx';
import CommertialSolutions from './pages/Service/CommertialSolutions/CommertialSolutions.jsx';
import IndustrialSolutions from './pages/Service/IndustrialSolutions/IndustrialSolutions.jsx';
import ResidentialSolutions from './pages/Service/ResidentialSolutions/ResidentialSolutions.jsx';
import RND from './pages/RND.jsx';
import ProductPage from './pages/Product/ProductPage.jsx';
import CertificatePage from './pages/CertificatePage/CerticatePage.jsx';
import Contract from './pages/ContractPage/Contract.jsx';
import AboutMissionAndVision from './pages/AboutMissionAndVision.jsx';
import ProjectPage from './components/Project/ProjectPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {path:"/", element:<Home></Home>},
      {
        path: "/industrialsolution",
        element:<CommertialSolutions></CommertialSolutions>
       },
      {
        path: "/commertialsolution",
        element: <IndustrialSolutions></IndustrialSolutions>
      },
      {
        path: "/residentialsolution",
        element:<ResidentialSolutions></ResidentialSolutions>
      },
      {
        path: "/about",
        element:<AboutMissionAndVision></AboutMissionAndVision>
      },
      {
        path: "/rnd",
        element:<RND></RND>
      },
      {
        path:"/product",
        element:<ProductPage></ProductPage>
      },
      {
        path:'/certification',
        element:<CertificatePage></CertificatePage>
      },
      {
        path:"/contract",
        element:<Contract></Contract>
      },
      {
        path:"/projects",
        element:<ProjectPage></ProjectPage>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
