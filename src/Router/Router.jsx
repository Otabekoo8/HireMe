import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Login from "../Login/Login";
import UserDetails from "../components/UserDetail";
import TopCreators from "../components/TopCreators";
import creatorsData from "../data/creators.json";
import AboutUsers from "../MainPage/Creators/Work";
import Profession from "../MainPage/Creators/Profession/ProfessionPage";
import DoctorProfile from "../MainPage/Creators/Profession/DoctorProfile";
const allCreators = creatorsData;



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/register",
        element: <Login />,
    },
    {
      path: "/top-creators",
      element: <TopCreators />,
    },
    {
      path: "/user/:id",
      element: <UserDetails creators={allCreators} />,
    },
    
    {path:"/about-users", element: <AboutUsers /> },
            {path:"/profession/:id", element: <Profession />},
            {path:"/doctor/:id", element: <DoctorProfile />}


    // {
    //     path: "/service",
    //     element: <Services />,
    // },
    // {
    //     path: "/top",
    //     element: <Top />,
    // }
    

]);

export default router;