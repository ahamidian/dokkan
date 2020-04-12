import React, {useEffect, useState} from 'react';
import {Route, useParams, Switch} from "react-router-dom";
import ListPage from "./ListPage";
import FormPage from "./FormPage";
import {getApi} from "../../../api";

export default function ModelPage() {

    const [filters, setFilters] = useState([]);
    const [fields, setFields] = useState([]);
    const [bulkEditFields, setBulkEditFields] = useState([]);
    const [columns, setColumns] = useState([]);

    let {path} = useParams();

    useEffect(() => {
        getApi().get(`${path}/meta_data/`)
            .then(response => {
                setFilters(response.data.filters);
                setFields(response.data.fields);
                setBulkEditFields(response.data.bulk_edit);
                setColumns(response.data.columns);
            })
            .catch((response) => {
                console.log(response);
            });
    }, [path]);

    return (

        <Switch>
            <Route exact path={`/dashboard/${path}/create`} name="Create Page">
                <FormPage title="Order" path={path} fields={fields}/>
            </Route>

            <Route exact path={`/dashboard/${path}/edit/:pk`} name="EditPage">
                <FormPage title="Order" path={path} fields={fields}/>
            </Route>

            <Route exact path={`/dashboard/${path}`} name="List Page">
                <ListPage title="Order" path={path} filters={filters} columns={columns} bulkEditFields={bulkEditFields}/>
            </Route>
        </Switch>

    );

}

