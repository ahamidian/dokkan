import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login";
import MainLayout from "./pages/dashboard/MainLayout";
import {create} from 'jss';
import rtl from 'jss-rtl';
import {createMuiTheme, ThemeProvider, jssPreset, StylesProvider} from '@material-ui/core/styles';
import {PRIMARY_COLOR} from "./constants";
import {SnackbarProvider} from "notistack";
import Grow from '@material-ui/core/Grow';

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
                            <Route exact path="/login" name="Login Page" component={Login}/>
                            <Route exact path="" name="dashboard" component={MainLayout}/>
                            <Route path="/dashboard" name="dashboard" component={MainLayout}/>
                        </Switch>
                    </SnackbarProvider>
                </Router>
            </ThemeProvider>
        </StylesProvider>
    );
}

export default App;

