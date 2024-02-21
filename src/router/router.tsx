import App from "../App";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home";

import SideBar from "../components/SideBar";
import "../App.css";
import Cotizacion from "../pages/Cotizacion";
// import { GlobalStyle } from "./style/global";
  
  const router = () => createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/Home",
      element:<SideBar/>,
      children:[
          {
              path: '/Home/',
              element:  <Home/>
          },
          {
            path:'/Home/cotizacion',
            element: <Cotizacion />
          }
    //       ,{
    //           path: '/api/create-box-cut',
    //           element: <CreateBoxCut />
    //       },
    //       {
    //         path: '/api/info-box-cut',
    //         element: <InfoBoxCut />
    //       }
       ]
    }]);


// const MainRouter =() =>{


      

// return (
//     <>

//     <App/>
//     </>

// )

// }

const MainRouter = () => <RouterProvider router={router()} /> 



export default MainRouter;