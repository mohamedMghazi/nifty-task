import React, {createContext, useContext} from 'react';
import PropTypes from "prop-types";
import CookieManager from "Utils/Storage/CookiesManager";

export const AuthContext = createContext(null);

/**
 * AuthProvider is a high-level component serving as a wrapper for the entire application.
 * It establishes and provides the AuthContext to all its nested children, facilitating the use of the `useAuth` hook throughout the application.
 * The AuthProvider is pivotal for implementing user authentication logic.
 * For instance, it can verify a user's authentication status by checking for a valid JWT in the storage.
 * Based on this check, the AuthProvider dynamically sets the `isAuthenticated` state to either true or false.
 * The AuthContext then holds this state, enabling the useAuth hook to effortlessly determine a user's authentication status.
 * Consequently, the application can conditionally render components based on the user's authentication status.
 * For authenticated users, the application content is rendered; for unauthenticated users, redirection to the login page is facilitated.
 *
 * @param children - The components encapsulated by AuthProvider, granting them access to the AuthContext.
 * @returns {JSX.Element} - Returns the AuthContext.Provider with the AuthContext value set to the isAuthenticated state.
 */
export default function AuthProvider({ children }) {
    const Cookies = new CookieManager();
    const isAuthenticated = !!Cookies.get("X-USER-TOKEN") ?? false;

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
