import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PATHS from "./Paths";
import AuthProvider from "./PrivateRoute/AuthContext";

/**
 * Layout component serving as the entry point for the application.
 * Combines routing and authentication context providers to establish the application structure.
 * @returns {JSX.Element} - Returns the structured application layout.
 */
export default function Layout()
{
    const router = createBrowserRouter([PATHS]);

    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
}
