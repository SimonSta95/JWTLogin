import { useState } from "react";

import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { login } from '../services/authService';
import {useNavigate} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await login(username, password);

            // Assuming the response structure includes token and role
            const { token, role } = response.data; // Destructure token and role from the response

            const userRole = Array.isArray(role) ? role[0] : role;

            // Store the token and role in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('role', userRole); // Store the role

            // Navigate to the home page or dashboard
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Login failed, please check your credentials');
        }
    };

    return (
        <Paper elevation={3} style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
            <Typography variant="h5" align="center" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleLogin}>
                <Box mb={2}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Box>
                <Box mb={2}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </Box>
                {error && (
                    <Typography variant="body2" color="error" align="center">
                        {error}
                    </Typography>
                )}
            </form>
        </Paper>
    );
}

export default Login;