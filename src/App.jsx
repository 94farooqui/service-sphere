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
import { useContext, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./redux/auth/authSlice";

export default function App() {

  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)

  useEffect(()=>{
    dispatch(setLoading(true))
    console.log("Setting loading to true",auth)
    const token = localStorage.getItem("jwtToken")

  })
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index:true, element: <Home />,
        },
        {
          path: "profile/:id",
          element: <Profile />,
        },
        {
          path: "bugs",
          element: <AllBugs />,
        },
        {
          path: "bugs/:id",
          element: <BugDetails />,
        },
        {
          path: "me",
          element: <BugsMe />,
        },
        {
          path: "archive",
          element: <Archive />,
        },
        {
          path: "new-bug",
          element: <NewBug />,
        },

        {
          path: "/settings",
          children: [
            {index:true, element: <Settings />},
            {
              path: "projects/new",
              element: <NewProject />,
            },
            {
              path: "projects/:id",
              element: <ProjectDetails />,
            },
            {
              path: "projects/:id/edit",
              element: <EditProjectDetails />,
            },
            {
              path: "domains/new",
              element: <NewDomain />,
            },
          ]
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return (
    <HeaderContextProvider>
      <RouterProvider router={router} />
    </HeaderContextProvider>
  );
}
