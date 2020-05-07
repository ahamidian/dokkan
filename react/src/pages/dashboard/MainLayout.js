import React from 'react';
import Header from "./components/Header";
import LoginRequired from "./components/LoginRequired";
import {Redirect, Route, Switch} from "react-router-dom";
import ModelPage from "./ModelPage/ModelPage";
import Dashboard from "./Dashboard/Dashboard";
import {makeStyles} from '@material-ui/core/styles';
import MyDrawer from "./components/MyDrawer";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        // direction: "rtl",
        flexGrow: 1,
        width:"100%",
        padding: theme.spacing(2),
    },
}));

export default function MainLayout({children}) {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <LoginRequired>
            <div className={classes.root}>
                <Header onMenuTogglerClick={handleDrawerToggle}/>
                <MyDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/dashboard/home"/>
                        </Route>
                        <Route exact path="/dashboard">
                            <Redirect to="/dashboard/home"/>
                        </Route>
                        <Route exact path="/dashboard/home">
                            <Dashboard/>
                        </Route>
                        <Route path="/dashboard/:path">
                            <ModelPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </LoginRequired>
    );

}
