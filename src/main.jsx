import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Root } from './layout/Root/Root.jsx';
import Home from './pages/Home.jsx';
import Initiative from './pages/Initiative.jsx';
import PolicyReform from './pages/PolicyReform.jsx';
import AdaptiveSocialProtection from './pages/Adaptive Social Protection.jsx';
import GreenSkills from './pages/Green Skills.jsx';
import EnergyTransition from './pages/EnergyTransition.jsx';
import SocialDialogue from './pages/SocialDialogue.jsx';
import GreenJobs from './pages/GreenJobs.jsx';
import ClimateJustice from './pages/ClimateJustice.jsx';
import Multimedia from './pages/Resources/Multimedia.jsx';
import Publications from './pages/Resources/Publications.jsx';
import PressCoverage from './pages/News and Media/PressCoverage.jsx';
import TelevisionCoverage from './pages/News and Media/Television Coverage.jsx';
import whatare from './pages/Interventions/what-are.jsx';
import storytalling from './pages/storytalling.jsx';
import Activities from './pages/Interventions/Activities.jsx';
import Blog from './pages/News and Media/Blog.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
        path:'/',
        Component:Home,
      },
      {
        path:'/initiative',
        Component:Initiative,
      },
      {
        path:'/policyReform',
        Component:PolicyReform,
      },
      {
        path:'/AdaptiveSocialProtection',
        Component:AdaptiveSocialProtection,
      },
      {
        path:'/greenSkills',
        Component:GreenSkills,
      },
      {
        path:'/energyTransition',
        Component:EnergyTransition,
      },
      {
        path:'/SocialDialogue',
        Component:SocialDialogue,
      },
      {
        path:'/GreenJobs',
        Component:GreenJobs,
      },
      {
        path:'/ClimateJustice',
        Component:ClimateJustice,
      },
      {
        path:'/Multimedia',
        Component:Multimedia,
      },
      {
        path:'/publications',
        Component:Publications,
      },
      {
        path:'/blog',
        Component:Blog,
      },
      {
        path:'/News and Media',
        Component:PressCoverage,
      },
      {
        path:'/TelevisionCoverage',
        Component:TelevisionCoverage
      },
      {
        path:'/whatare',
        Component:whatare,
      },
      {
        path:'/storytalling',
        Component:storytalling,
      },
      {
        path:'/Activities',
        Component:Activities
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
