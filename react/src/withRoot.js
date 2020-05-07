import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { create } from "jss";
import rtl from "jss-rtl";
import {JssProvider} from "react-jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const generateClassName = createGenerateClassName();

const theme = createMuiTheme({
    direction: "rtl",
});

function withRoot(Component) {
    function WithRoot(props) {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...props} />
                </MuiThemeProvider>
            </JssProvider>
        );
    }

    return WithRoot;
}

export default withRoot;
