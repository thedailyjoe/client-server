import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';


import theme from '../Theme';

import Home from './Home'
import Products from './Products'
import Collaborate from './Collaborate';
import About from './About';


import ListItemIcon from '@material-ui/core/ListItemIcon';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DescriptionIcon from '@material-ui/icons/Description';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

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
    },
});
const MainMenu = props => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem className={classes.listItem} button >
                        <ListItemIcon>
                            <HomeIcon className={classes.listItemIcon} />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem className={classes.listItem} button >
                        <ListItemIcon>
                            <ShoppingBasketIcon className={classes.listItemIcon} />
                        </ListItemIcon>
                        <ListItemText primary='Products' />
                    </ListItem>
                </Link>
                <Link to="/collaborate" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem className={classes.listItem} button >
                        <ListItemIcon>
                            <DescriptionIcon className={classes.listItemIcon} />
                        </ListItemIcon>
                        <ListItemText primary='Work With Us' />
                    </ListItem>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem className={classes.listItem} button >
                        <ListItemIcon>
                            <ContactMailIcon className={classes.listItemIcon} />
                        </ListItemIcon>
                        <ListItemText primary='About' />
                    </ListItem>
                </Link>
            </List>

        </div>
    );

    return (
        <div>
            <IconButton className={classes.drawerIcon} color="inherit" onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
};

export default MainMenu;