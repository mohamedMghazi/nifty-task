import Root from "./Root";
import PrivateRoute from "./PrivateRoute";
import Authentication from "Pages/Authentication";
import Login from "Pages/Authentication/Forms/Login";
import Register from "Pages/Authentication/Forms/Register";
import Home from "Pages/Home";
import NotFound from "../Pages/NotFound";

const PATHS = {
    path: "/",
    element: <Root />,
    children: [
        {
            index: true,
            element: <PrivateRoute>
                <Home />
            </PrivateRoute>,
            errorElement: <>Unexpected Error</>,
        },
        {
            path: "auth",
            element: <Authentication />,
            errorElement: <>Unexpected Error</>,
            children: [
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
            ]
        },
        { path: "*", element: <NotFound /> },
    ],
}

export default PATHS;
