import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';


// custom imports
import logo from "../img/logo.jpg"
import { WEB_NAME, PAGES, LOGGEDIN_PAGES } from './vars';
import { getUser, logoutUser } from './functions';


const drawerWidth = 240;

export default function Navbar(props) {
  const location = useLocation()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  var user = getUser()
  const navigate = useNavigate()


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img className="logo small" alt={WEB_NAME} src={logo}></img>
      </Typography>
      <Divider />
      <List>
        {PAGES.map((item, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton component={Link} to={item.url} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img className="logo" alt={WEB_NAME} src={logo}></img>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {!user.status ? PAGES.map((item, key) => (
              <Button variant={location.pathname == item.url ? "contained" : "outlined"} component={Link} to={item.url} key={key} sx={location.pathname == item.url ? { border: "1px solid #fff", color: '#fff', backgroundColor: "#ffffff40" } : { color: '#fff', backgroundColor: "#ffffff10" }} size="large">
                {item.name}
              </Button>
            ))
              :
              LOGGEDIN_PAGES.map((item, key) => (
                <Button onClick={(e) => {
                  e.preventDefault();
                  if (item.url == "/logout") {
                    logoutUser();
                    props.setUser(getUser())
                  }

                }} variant={location.pathname == item.url ? "contained" : "outlined"} component={Link} to={item.url} key={key} sx={location.pathname == item.url ? { border: "1px solid #fff", color: '#fff', backgroundColor: "#ffffff40" } : { color: '#fff', backgroundColor: "#ffffff10" }} size="large">
                  {item.name}
                </Button>
              ))
            }

          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </>
  );
}