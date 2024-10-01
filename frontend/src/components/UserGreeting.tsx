import {useNavigate} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";

function UserGreeting() {
    const token = localStorage.getItem('token'); // Check if token exists
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    };

    return (
        <Box mt={4}>
            {token ? (
                <>
                    <Typography variant="h5">Welcome back, User!</Typography>
                    <Button variant="contained" color="primary" onClick={handleLogout}>
                        Logout
                    </Button>
                </>
            ) : (
                <Typography variant="h5">Please log in to see your dashboard.</Typography>
            )}
        </Box>
    );
}

export default UserGreeting;