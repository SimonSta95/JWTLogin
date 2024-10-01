import {Navigate} from "react-router-dom";


interface ProtectedRouteProps {
    element: React.ReactNode;
    allowedRoles?: string;
}

function ProtectedRoute(props: ProtectedRouteProps) {
    const token = localStorage.getItem('token'); // Check if the token exists
    const userRole = localStorage.getItem('role'); // Get the user role from local storage (assuming you store it)

    // If no token, redirect to login
    if (!token) {
        return <Navigate to="/login" />;
    }

    // If allowedRoles is provided, check if the user role is one of them
    if (props.allowedRoles && !props.allowedRoles.includes(userRole || '')) {
        return <Navigate to="/login" />; // Redirect if the user does not have the right role
    }

    // If token exists and role is allowed, render the requested element
    return props.element;
};

export default ProtectedRoute;