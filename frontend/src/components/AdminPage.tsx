import {Box, Typography} from "@mui/material";

function AdminPage() {
    return (
        <Box>
        <Typography variant="h4" gutterBottom>
            Admin Page
        </Typography>
        <Typography variant="body1">
            Only users with the ADMIN role can access this page.
        </Typography>
    </Box>
    );
}

export default AdminPage;