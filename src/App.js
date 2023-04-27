import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";
import Write from "./pages/write";
import Home from "./pages/home";
import Single from "./pages/single";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./style.scss";

const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
