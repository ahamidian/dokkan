import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';
import SplashScreen from "./SplashScreen";
import {UserProvider} from "./UserContext";
import {CartProvider} from "./CartContext";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        width: "100%",
        // padding: theme.spacing(2),
    },
}));

export default function ShopMainLayout({children}) {
    const classes = useStyles();


    return (
        <UserProvider>
            <CartProvider>
                <div className={classes.root}>
                    {/*<Header/>*/}

                    <main className={classes.content}>
                        {/*<div className={classes.toolbar}/>*/}
                        <Switch>
                            <Route exact path="/shop">
                                <SplashScreen/>
                            </Route>
                            {/*<Route exact path="/dashboard/home">*/}
                            {/*    <Dashboard/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/dashboard/:path">*/}
                            {/*    <ModelPage/>*/}
                            {/*</Route>*/}
                        </Switch>
                    </main>
                </div>
            </CartProvider>
        </UserProvider>

    );

}
