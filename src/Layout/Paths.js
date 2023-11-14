import Root from "./Root";
import PrivateRoute from "./PrivateRoute";

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
            path: "login",
            element: <>Login</>,
            errorElement: <>Unexpected Error</>,
        },
        { path: "*", element: <>Not found</> },
    ],
}

export default PATHS;
