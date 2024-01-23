import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "../Layout";
import Home from "./pages/Home";
import BugDetails from "./pages/BugDetails";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  const router = createBrowserRouter([
    {
    element : <Layout/>,
    errorElement: <PageNotFound/>,
    children : [
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/bug/:id',
        element: <BugDetails/>
      }
    ]
  }
])
  return (
    <RouterProvider router={router} />
  )
}