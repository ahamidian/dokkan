import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import img from "../../typo.png"
import {navItems} from '../../NavItems'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {makeStyles} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: 14,
        margin: ".25rem 0",
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },

}));

function ListItemLink({icon, title, to, onClick}) {
    const classes = useStyles();

    const history = useHistory();

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li onClick={onClick}>
            <ListItem button component={renderLink} selected={history.location.pathname.startsWith(to)}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <p className={classes.listItemText}>{title}</p>
            </ListItem>
        </li>
    );
}

export default function MyDrawer({handleDrawerToggle, mobileOpen}) {
    const classes = useStyles();
    const isAdmin=JSON.parse(localStorage.getItem("user")).role==="admin";

    const drawer = (
        <div>
            <img src={img} style={{width: 239, padding: 20, paddingRight: 55, paddingLeft: 55}} alt="logo dokkan"/>
            <List>
                {navItems.map((nav) => {
                            if (!nav.adminOnly || isAdmin) {
                                return <ListItemLink key={nav.name} to={nav.url} title={nav.name} icon={nav.icon}
                                                     onClick={() => {
                                                         if (mobileOpen) {
                                                             handleDrawerToggle();
                                                         }
                                                     }}/>
                            }
                        }
                    )}

            </List>
        </div>

    );

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{paper: classes.drawerPaper,}}
                    ModalProps={{keepMounted: true}}>
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer classes={{paper: classes.drawerPaper}} variant="permanent" open>
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )

}
