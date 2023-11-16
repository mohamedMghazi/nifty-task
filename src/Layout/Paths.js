import Root from "./Root";
import PrivateRoute from "./PrivateRoute";
import Authentication from "Pages/Authentication";
import Login from "Pages/Authentication/Forms/Login";
import Register from "Pages/Authentication/Forms/Register";

// TODO: implement 404 and Unexpected error pages
const PATHS = {
    path: "/",
    element: <Root />,
    children: [
        {
            index: true,
            element: <PrivateRoute>
                <>Home</>
            </PrivateRoute>,
            errorElement: <>Unexpected Error</>,
        },
        {
            path: "authentication",
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
        { path: "*", element: <>Not found</> },
    ],
}

export default PATHS;
