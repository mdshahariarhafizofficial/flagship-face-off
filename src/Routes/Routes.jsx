import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Favorite from "../Pages/Favorite/Favorite";

const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: <p>404 not found</p>,
      children:[
        {
            index: true, 
            Component: Home
        },
        {
          path: 'about',
          Component: About
        },
        {
          path: 'favorite',
          Component: Favorite
        }
      ]
    }
])

export default router;