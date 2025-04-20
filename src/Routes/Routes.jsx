import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";

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
      ]
    }
])

export default router;