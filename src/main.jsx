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
import Electrical from './components/ProjectTasisat/Electrical.jsx';
import LightingControl from './components/ProjectTasisat/LightingControl.jsx';
import SolarPv from './components/ProjectTasisat/SolarPv.jsx';
import SolarWaterHeatting from './components/ProjectTasisat/SolarWaterHeatting.jsx';
import MEP from './components/ProjectTasisat/MEP.jsx';
import HVAC from './components/ProjectTasisat/HVAC.jsx';
import FireAlarm from './components/ProjectTasisat/FireAlarm.jsx';
import BMS from './components/ProjectTasisat/BMS.jsx';
import SolarPumping from './components/ProjectTasisat/SolarPlumping.jsx';
import SolarEnergy from './components/ProjectTasisat/SolarEnergy.jsx';
import MEPSection from './components/ProjectTasisat/MEPSectrion.jsx';
import FireFitting from './components/ProjectTasisat/FireFitting.jsx';
import Fm200 from './components/ProjectTasisat/Fm200.jsx';
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
      // {
      //   path:"/projects",
      //   element:<ProjectPage></ProjectPage>
      // },
      {
        path:"/projects/electrical",
        element:<Electrical></Electrical>
      },
      {
        path:"/projects/lighting-control",
        element:<LightingControl></LightingControl>
      },
      {
        path:"/projects/solar-pv",
        element:<SolarPv></SolarPv>
      },
      {
        path:"/projects/solar-water-heating",
        element:<SolarWaterHeatting></SolarWaterHeatting>
      },
      

      {
        path:"/projects/hvac",
        element:<HVAC></HVAC>
      },

      // {
      //   path:"/projects/fire-alarm",
      //   element:<FireAlarm></FireAlarm>
      // },
      {
        path:"/projects/bms",
        element:<BMS></BMS>
      },
      {
        path:"/projects/solar-pumping",
        element:<SolarPumping></SolarPumping>
      },{
        path:"/projects/solar-energy",
        element:<SolarEnergy></SolarEnergy>
      },
      {
        path:"/projects/mep",
        element:<MEPSection></MEPSection>
      },
      {
        path:"/projects/fire-fighting-system",
        element:<FireFitting></FireFitting>
      },
      {
        path:"/projects/fm200",
        element:<Fm200></Fm200>
      },
      {
        path:"/projects/automation",
        element:<ProjectPage></ProjectPage>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
