import React, {useEffect, useState} from 'react';
import {Route, useParams, Switch} from "react-router-dom";
import ListPage from "./ModelList/ListPage";
import {getApi} from "../../../api";
import CreateForm from "./ModelForm/CreateForm";
import EditForm from "./ModelForm/EditForm";
import Spinner from "react-spinkit";
import {PRIMARY_COLOR} from "../../../constants";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useSnackbar} from "notistack";

export default function ModelPage() {

    const [config, setConfig] = useState("loading");
    const [filters, setFilters] = useState([]);
    const [fields, setFields] = useState([]);
    const [bulkEditFields, setBulkEditFields] = useState([]);
    const [columns, setColumns] = useState([]);
    const [state, setState] = useState("loading");
    let {path} = useParams();

    function loadData() {
        getApi().get(`dashboard/${path}/meta_data/`, true)
            .then(response => {
                setConfig(response.data.config);
                setFilters(response.data.filters);
                setFields(response.data.fields);
                setBulkEditFields(response.data.bulk_edit);
                setColumns(response.data.columns);
                setState("loaded");
            })
            .catch((response) => {
                console.log(response);
                setState("error");
            });
    }

    useEffect(() => {
        setState("loading");
        loadData();
    }, [path]);

    if (state === "loading") {
        return (
            <div style={{flex: 1, marginTop: 50, width: "100%"}}>
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
        <Switch>
            {config.creatable && (
                <Route exact path={`/dashboard/${path}/create`} name="Create Page">
                    <CreateForm config={config} path={path} fields={fields} state={state}/>
                </Route>
            )}

            {config.editable && (
                <Route exact path={`/dashboard/${path}/edit/:pk`} name="EditPage">
                    <EditForm config={config} path={path} fields={fields} state={state}/>
                </Route>
            )}
            <Route exact path={`/dashboard/${path}`} name="List Page">
                <ListPage config={config} path={path} filters={filters} columns={columns}
                          state={state} bulkEditFields={bulkEditFields}
                          bulkEditEnabled={bulkEditFields && bulkEditFields.length > 0}/>
            </Route>
        </Switch>
    );

}

