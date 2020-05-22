import React, {useState} from 'react';
import {getApi} from "../../../../api";
import {useHistory} from 'react-router-dom';
import Field from "./Field";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"
import {useSnackbar} from "notistack";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 20,
        fontWeight: 450,
        margin:0,
    },
    paper: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(2),
    },
}));
export default function CreateForm({fields, config, path}) {
    const classes = useStyles();
    const [formData, setFormData] = useState({});
    const history = useHistory();
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();


    function attemptCreate() {
        getApi().post(`dashboard/${path}/`, formData,true)
            .then(response => {
                history.push(`/dashboard/${path}`);
            })
            .catch((response) => {
                console.log(response);
                enqueueSnackbar("خطایی پیش آمد. دوباره تلاش کنید.",{variant: 'error'});
            });

    }

    function cancel() {
        history.goBack();
    }

    return (
        <>
            <Grid container direction="row" alignItems="center" justify="space-between">
                <Grid item xs={8}>
                    <p className={classes.title}>  {`ایجاد ${config.single_item} جدید`}</p>
                </Grid>
                <Grid item>
                    <Button onClick={cancel}>بازگشت</Button>
                </Grid>
            </Grid>
            <Paper className={classes.paper}>
                <Grid container direction="row" alignItems="center">
                    {fields.map((field) => <Field key={field.name} field={field} data={formData} setData={setFormData}/>)}
                </Grid>
                <Button variant="contained" color="primary" size="medium" className={classes.button}
                        onClick={attemptCreate}>ایجاد</Button>
            </Paper>
        </>
    );

}