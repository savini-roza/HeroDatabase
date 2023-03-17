import { AppBar, Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rotas from "../routes/Routes";
import MenuIcon from '@mui/icons-material/Menu';

function Template() {
    const [open, setOpen] = useState(true);
    const drawerWidth = 240;

    function handleDrawerOpen() {
        setOpen(!open);
    };

    return (
        <>
            <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar variant="dense">
                    <IconButton
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img className="logo" src={require('../assets/img/logo.png')} /><h1> Hero Database</h1>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >

                <Drawer
                    variant="temporary"
                    hideBackdrop={true}
                    open={open}
                    disableEnforceFocus={true}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <div className="mt-5">
                        <br />
                        <br />
                        <Link to="/herois"><Button fullWidth={true} sx={{ color: 'text.primary'}}>Herois</Button></Link>
                        <br />
                        <br/>
                        <Link to="/categorias"><Button fullWidth={true} sx={{ color: 'text.primary' }}>Categorias</Button></Link>
                    </div>
                </Drawer>
            </Box>
            <Box sx={{ marginLeft: open ? `${drawerWidth}px` : `inherit` }}>
                <div className="mt-5">
                    <br />
                    <br />
                    <Rotas />
                </div>
            </Box>
        </>
    )
}

export default Template;