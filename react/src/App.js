import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from "./apps/dashboard/Login/Login";
import DashboardMainLayout from "./apps/dashboard/DashboardMainLayout";
import {create} from 'jss';
import rtl from 'jss-rtl';
import {createMuiTheme, ThemeProvider, jssPreset, StylesProvider} from '@material-ui/core/styles';
import {PRIMARY_COLOR} from "./constants";
import {SnackbarProvider} from "notistack";
import Grow from '@material-ui/core/Grow';
import LandingPage from "./apps/landingPage/LandingPage";
import ShopMainLayout from "./apps/shop/ShopMainLayout";

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

const theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            main: PRIMARY_COLOR,
        },
    },


});

function App() {
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <Router>
                    <SnackbarProvider maxSnack={1} TransitionComponent={Grow}   anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}>
                        <Switch>
                            <Route exact path="/" name="Landing page" component={LandingPage}/>
                            <Route exact path="/dashboard/login" name="Login Page" component={Login}/>
                            <Route path="/dashboard" name="dashboard" component={DashboardMainLayout}/>
                            <Route path="/shop" name="market" component={ShopMainLayout}/>
                        </Switch>
                    </SnackbarProvider>
                </Router>
            </ThemeProvider>
        </StylesProvider>
    );
}

export default App;

