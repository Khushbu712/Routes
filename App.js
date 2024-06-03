import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// createBR takes the list of multiple obj(based on no of routes)
import About from "./pages/About";
import Item from "./pages/Item";

// here we have just created the routes not provided the routes to  the application

function App() {

  const router = createBrowserRouter([
    {path: "/",element:<Home/>},
    {path:"/about",element:<About/>},
    {path:"/item",element:<Item/>}
  ])

  return (
    <>
   <RouterProvider  router={router}/>
    </>
  )
}

export default App;
