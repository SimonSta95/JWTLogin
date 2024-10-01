import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import darkTheme from './theme';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import AdminPage from "./components/AdminPage.tsx";
import UserPage from "./components/UserPage.tsx";
import UserGreeting from "./components/UserGreeting.tsx";

function App() {

  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/register">Register</Button>
              <Button color="inherit" component={Link} to="/user">User Page</Button>
              <Button color="inherit" component={Link} to="/admin">Admin</Button>
            </Toolbar>
          </AppBar>
          <Container>
            <Box mt={5}>
              <UserGreeting /> {/* Display the UserGreeting component */}
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/"
                    element={
                      <ProtectedRoute element={<h2>Welcome to the protected home page!</h2>} />
                    }
                />
                <Route
                    path="/user"
                    element={
                      <ProtectedRoute element={<UserPage />} />
                    }
                />
                <Route
                    path="/admin"
                    element={
                      <ProtectedRoute element={<AdminPage />} allowedRoles={"ADMIN"} />
                    }
                />
              </Routes>
            </Box>
          </Container>
        </Router>
      </ThemeProvider>
  );
}

export default App
