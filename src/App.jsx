import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import BugDetails from "./pages/BugDetails";
import PageNotFound from "./pages/PageNotFound";
import AllBugs from "./pages/AllBugs";
import BugsMe from "./pages/BugsMe";
import Archive from "./pages/Archive";
import { useContext } from "react";
import HeaderContext from "./context/HeaderContext";
import { HeaderContextProvider } from "./context/HeaderContext";

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
        path: '/bugs',
        element: <AllBugs/>
      },
      {
        path:'/bugs/:id',
        element: <BugDetails/>
      },
      {
        path:'/me',
        element: <BugsMe/>
      },
      {
        path:'/archive',
        element: <Archive/>
      }
    ]
  }
])
  return (
    <HeaderContextProvider>
      <RouterProvider router={router} />
    </HeaderContextProvider>
  )
}