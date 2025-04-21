import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Favorite from "../Pages/Favorite/Favorite";
import MobileDetails from "../Pages/MobileDetails/MobileDetails";

const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: <p>404 not found</p>,
      children:[
        {
            index: true, 
            Component: Home,
            hydrateFallbackElement: <p>Loading</p>,
            loader: () => fetch('../phones.json')
        },
        {
          path: 'about',
          Component: About
        },
        {
          path: 'favorite',
          Component: Favorite
        },
        {
          path: 'mobile-details/:id',
          Component: MobileDetails,
          hydrateFallbackElement: <p>Loading...</p>,
          loader: () => fetch('../phones.json')
        }
      ]
    }
])

export default router;