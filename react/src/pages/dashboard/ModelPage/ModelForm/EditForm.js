import React, {useEffect, useState} from 'react';
import {getApi} from "../../../../api";
import {useHistory, useParams} from 'react-router-dom';
import Field from "./Field";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button"
import Spinner from "react-spinkit";
import {PRIMARY_COLOR} from "../../../../constants";
import {useSnackbar} from "notistack";


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 20,
        fontWeight: 450,
        margin: 0,
    },
    paper: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(2),
    },
}));
export default function EditForm({fields, config, path}) {
    const [formData, setFormData] = useState({});
    const history = useHistory();
    let {pk} = useParams();
    const classes = useStyles();
    const [state, setState] = useState("loading");
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    function loadData(){
        getApi().get(`dashboard/${path}/${pk}/`,true)
            .then(response => {
                const item = response.data;
                let itemData = {};
                fields.forEach((field) => {
                    if (Object.keys(item).indexOf(field.name) >= 0) {
                        itemData = {...itemData, [field.name]: item[field.name]}
                    }
                });
                setFormData(itemData);
                setState("loaded");
                console.log(fields)
            })
            .catch((err) => {
                console.log(err);
                setState("error");
            });
    }
    useEffect(() => {
        loadData()
    }, [path]);


    function attemptEdit() {
        getApi().put(`dashboard/${path}/${pk}/`, formData,true)
            .then(response => {
                history.push(`/dashboard/${path}`);
            })
            .catch((response) => {
                console.log(response);
                enqueueSnackbar("خطایی پیش آمد. دوباره تلاش کنید.",{variant: 'error'});
            });
    }

    function attemptDelete() {
        getApi().delete(`dashboard/${path}/${pk}/`,true)
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

    if (state === "loading") {
        return (
            <div style={{flex: 1, marginTop:50, width: "100%"}}>
                <Spinner name="ball-grid-pulse" color={PRIMARY_COLOR} fadeIn="none" style={{margin: "auto"}}/>
            </div>
        )
    } else if (state === "error") {
        return (
            <Grid container justify="center" direction="column" alignItems="center" style={{marginTop: 80}}>
                <p style={{textAlign: "center"}}>خطایی پیش آمد، دوباره تلاش کنید.</p>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={() => {
                        setState("loading");
                        loadData();
                    }}
                >
                    تلاش مجدد
                </Button>
            </Grid>
        )
    }


    return (
        <>
            <Grid container direction="row" alignItems="center" justify="space-between">
                <Grid item xs={8}>
                    <p className={classes.title}>  {`ویرایش ${config.single_item} `}</p>
                </Grid>
                <Grid item>
                    <Button onClick={cancel}>بازگشت</Button>
                </Grid>
            </Grid>
            <Paper className={classes.paper}>
                <Grid container direction="row" alignItems="center">
                    {fields.map((field) => <Field key={field.name} field={field} data={formData} setData={setFormData}/>)}
                </Grid>
                <Grid container direction="row" alignItems="center" justify="space-between">
                    <Button variant="contained" color="primary" size="medium" className={classes.button}
                            onClick={attemptEdit}>ایجاد</Button>
                    <Button variant="contained"  size="medium"  style={{backgroundColor:"#ff5456",color:"white"}} className={classes.button}
                            onClick={attemptDelete}>حذف</Button>
                </Grid>

            </Paper>
        </>
    );

}