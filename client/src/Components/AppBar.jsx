import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListItem from '@material-ui/core/ListItem';

import theme from '../Theme';

import MainMenu from './MainMenu';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    listItem: {
        '&:hover': {
            background: theme.palette.secondary.main,
            // color: 'white'
        },
        '&:hover $listItemIcon': {
            // color: theme.palette.primary.main
            color: 'black'
        },
    },
    listItemIcon: {
        color: theme.palette.primary.main
    },
    drawerIcon: {
        '&:hover': {
            background: theme.palette.secondary.main,
            color: 'black'
        },
        '&:not(hover)': {
            color: 'white'
        }
    },
});

const MainAppBar = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} variant="dense">
                    {/*
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    */}
                    <MainMenu />
                    <Typography variant="h6" color="inherit">
                        Daily Joe
                    </Typography>
                    <div>
                        <Link to="/cart">
                            <IconButton
                                className={classes.drawerIcon}
                                color="inherit"
                            >
                                <ShoppingCartIcon />
                            </IconButton>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MainAppBar;