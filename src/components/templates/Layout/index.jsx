import React, { useEffect, useState } from "react";
import { 
    AppBar, 
    Avatar,
    Container, 
    createTheme, 
    IconButton, 
    Menu, 
    MenuItem, 
    ThemeProvider, 
    Toolbar } from "@mui/material";
import useStyles from "./styles";
import { AccountCircle } from "@mui/icons-material";
import { useStore } from "../../../common/Context";


function Layout(props) {
    const classes = useStyles();
    const [{user}, dispatch] = useStore();

    const [anchorEl, setAnchorEl] = useState(null);
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ed3300',
            }
        }
    });

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleProfile = () => {
        handleClose();
        alert(`You are logged in as ${user.email}`);
    };
    const handleLogout = () => {
        handleClose();
        dispatch({
            type: 'clearContext'
        })
        window.location.href = "/";
    };

    return (
        <ThemeProvider theme={theme}>
            <Container 
                disableGutters={true}
                fixed={false}
                maxWidth={'xl'}
                className={classes.root}
            >
                <AppBar position="static">
                    {/* <Container maxWidth="xl"> */}
                        <Toolbar>
                            <div className={classes.toolBarRoot}>
                                <div className={classes.logo}>
                                    <Avatar style={{background: '#fff', padding:'2%'}} 
                                        alt="cardinal picture" 
                                        src="/cardinal_face.png" 
                                    />
                                    <h3>University of Louisville</h3>
                                    {/* {(localStorage.getItem('user')) && <div>asd</div>} */}
                                </div>
                                <div className={classes.userInfo}>
                                    {(user) && 
                                        <>
                                        <span>{user.email}</span>
                                        <IconButton
                                            size="large"
                                            edge="end"
                                            color="inherit"
                                            aria-label="menu"
                                            sx={{ mr: 2 }}
                                            onClick={handleMenu}
                                        >
                                            <AccountCircle />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transitionDuration={250}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={()=>{handleProfile()}}>Profile</MenuItem>
                                            <MenuItem onClick={()=>{handleLogout()}}>Log out</MenuItem>        
                                        </Menu>
                                        </>
                                    }
                                </div>
                            </div>
                        </Toolbar>
                    {/* </Container> */}
                </AppBar>
                <div className={classes.children}>
                    {props.children}
                </div>
            </Container>
        </ThemeProvider>
    );
}
export default Layout;