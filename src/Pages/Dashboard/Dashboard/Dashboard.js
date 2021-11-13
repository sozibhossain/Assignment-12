import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import useAuth from '../../../Hooks/useAuth';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardOrders from './DashboardOrders/DashboardOrders';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';
import AdminRoute from '../../Login/Login/AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';
import Review from '../Review/Review';


const drawerWidth = 150;

function Dashboard(props) {
  const { window } = props;
  const {logout} = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const{admin} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    
    <div>
      <Toolbar />
      <Divider />
      <Button onClick={logout} color="inherit">Logout</Button>
      <Link to='/home' style={{ textDecoration: 'none'}}><Button variant="contained">--HOME--</Button></Link>
      <Link to={`${url}`} style={{ textDecoration: 'none'}}><Button color="inherit">--Orders---</Button></Link>
      <Link to={`${url}/review`} style={{ textDecoration: 'none'}}><Button color="inherit">Review</Button></Link>
      {admin && <Box>
        <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none'}}><Button color="inherit">Make Admin</Button></Link>
        <Link to={`${url}/addproduct`} style={{ textDecoration: 'none'}}><Button color="inherit">Add product</Button></Link>
        <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none'}}><Button color="inherit">Manage Product</Button></Link>
        </Box>}
        
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  // const {logout} = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            }}
            >
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
            <Typography variant="h6" noWrap component="div">
                Dashboard
            </Typography>
            </Toolbar>
        </AppBar>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
            >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
          {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
            </Drawer>
        </Box>
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
            <Toolbar />
            <Switch>
              <Route exact path={path}>
                <DashboardOrders></DashboardOrders>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
            </Switch>
            
            
          

        </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;