import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {navItems} from '../../../NavItems'
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {PRIMARY_COLOR} from "../../../constants";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        // background: "linear-gradient(114.1501577487deg, #f8991c 4.9296141814%, #f26722 97.838894682%)",
        background: PRIMARY_COLOR,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,
    },
    logoutButton: {
        color:"white"
    },
}));

export default function Header({onMenuTogglerClick, user, paddingRight}) {
    const history = useHistory();
    const [addresses, setAddresses] = useState([]);
    const [title, setTitle] = useState("");

    const classes = useStyles();

    useEffect(() => {
        let addresses = [{title: "داشبورد", url: "dashboard/home"}];
        let selectedItem;
        navItems.forEach((item) => {
            if (history.location.pathname.startsWith(item.url)) {
                setTitle(item.name);
                selectedItem = item;
            }
        });
        if (selectedItem && selectedItem !== navItems[0]) {
            addresses.push({title: selectedItem.name, url: selectedItem.url});
            if (history.location.pathname.includes("/create")) {
                addresses.push({title: "ایجاد " + selectedItem.singleName, url: history.location.pathname});
            }
            if (history.location.pathname.includes("/edit/")) {
                addresses.push({
                    title: "تغییر " + selectedItem.singleName + " " + history.location.pathname.substring(history.location.pathname.indexOf("/edit/") + 6),
                    url: history.location.pathname
                });
            }
        }
        setAddresses(addresses);
    }, [history.location.pathname]);


    function logout() {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        window.location.reload();
    }

    // function renderAddresses() {
    //     return addresses.map((address, index) => {
    //         return (
    //             <>
    //                 <Link to={address.url}>
    //                     <Menu.Item as='a'>
    //                         <p style={{
    //                             float: "right",
    //                             margin: 0,
    //                             color: "white"
    //                         }}>{address.title}</p>
    //                     </Menu.Item>
    //                 </Link>
    //
    //
    //                 {index < addresses.length - 1 && (
    //                     <p style={{
    //                         float: "right",
    //                         margin: 0,
    //                         color: "white",
    //                         paddingRight: "10px",
    //                         paddingLeft: "10px"
    //                     }}>{"<"}</p>
    //                 )}
    //             </>
    //         )
    //     })
    // }
    return (
        <AppBar position="fixed"  className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={onMenuTogglerClick}>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>

                <IconButton aria-label="logout" onClick={logout}>
                    <PowerSettingsNewOutlinedIcon className={classes.logoutButton}/>
                </IconButton>
        </Toolbar>
        </AppBar>
    );


}
