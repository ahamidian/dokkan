import React, {useState} from 'react';
import {getApi} from "../../../api";
import {useHistory} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useSnackbar} from "notistack";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
    },
    button: {
        width:"100%"
    },
    paper: {
        padding: theme.spacing(2),
        width: "500px",
        paddingBottom:theme.spacing(4),
    },

}));

export default function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();


    function attemptLogin() {
        getApi(false).post(`token/`, {username, password})
            .then(response => {
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                localStorage.setItem('user',  JSON.stringify(response.data.user));
                history.push("/dashboard/home");
            })
            .catch((response) => {
                console.log(response);
                enqueueSnackbar("خطایی پیش آمد. دوباره تلاش کنید.",{variant: 'error'});
            });

    }


    return (
        <Grid container justify="center" className={classes.root}>
            <Paper className={classes.paper}>
                <h3>ورود</h3>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField style={{width: "100%"}} label="نام کاربری" variant="outlined"
                                   value={username}
                                   onChange={(event) => setUsername(event.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>

                        <TextField style={{width: "100%"}} label="رمز عبور" type="password" variant="outlined"
                                   value={password}
                                   onChange={(event) => setPassword(event.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" size="large" onClick={attemptLogin} className={classes.button}>ورود</Button>
                    </Grid>
                </Grid>
            </Paper>

        </Grid>
    );

}