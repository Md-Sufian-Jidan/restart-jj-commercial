import { createBrowserRouter, } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import EstateDetails from "../Components/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error/Error";
import UserProfile from "../Pages/UserProfile/UserProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/userProfile',
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            },
            {
                path: '/estate/:id',
                element: <PrivateRoute><EstateDetails /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
]);