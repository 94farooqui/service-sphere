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
import NewBug from "./pages/NewBug";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthLayout from "./Layout/AuthLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NewProject from "./pages/NewProject";
import ProjectDetails from "./pages/ProjectDetails";
import NewDomain from "./pages/NewDomain";
import EditProjectDetails from "./pages/EditProjectDetails";

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
        path:'/profile/:id',
        element: <Profile/>
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
      },
      {
        path:'/new-bug',
        element: <NewBug/>
      },
      {
        path:'/settings',
        element: <Settings/>,
      },
      {
        path:'/settings/projects/new',
        element: <NewProject/>
      },
      {
        path:'/settings/projects/:id',
        element: <ProjectDetails/>
      },
      {
        path:'/settings/projects/:id/edit',
        element: <EditProjectDetails/>
      },
      {
        path:'/settings/domains/new',
        element: <NewDomain/>
      },
    ]
  },{
    element: <AuthLayout/>,
    children: [
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/signup',
      element: <Signup/>
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