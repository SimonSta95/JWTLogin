import {Box, Typography} from "@mui/material";

function UserPage() {
    return (
        <Box mt={4}>
            <Typography variant="h4" gutterBottom>
                User Dashboard
            </Typography>
            <Typography variant="body1">
                Welcome to your user dashboard. Here you can manage your account and access user-specific features.
            </Typography>
            <Typography variant="body1">
                This page is only accessible to logged-in users.
            </Typography>
        </Box>
    );
}

export default UserPage;