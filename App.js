import { createBrowserRouter,RouterProvider ,createRoutesFromElements,Route} from "react-router-dom";
import Home from "./pages/Home";
// createBR takes the list of multiple obj(based on no of routes)
import About from "./pages/About";
import Item from "./pages/Item";
import {Navbar} from "./components/Navbar"

// here we have just created the routes not provided the routes to  the application

function App() {

  // const routes = createRoutesFromElements(
  //   <>
  //   <Route path="/" element={<Home/>}/>
  //   <Route path="/about" element={<About/>}/>
  //   <Route path="/item" element={<Item/>}/>

  //   </>
  // )

  // const router = createBrowserRouter(routes);


  const router = createBrowserRouter([
    {path:"/",
    element:<Navbar />,
     children:[
    { index:true ,element:<Home/>},
    {path:"/about", element:<About/>},
    {path:"/item", element:<Item/>}
    ],
  },
    ]
  )

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App;
