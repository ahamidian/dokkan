import React, {useEffect, useState} from 'react';
import {Grid} from "semantic-ui-react"
import EditForm from "../Common/EditForm";
import {getApi} from "../../../api";
import {useParams} from "react-router-dom"
import CreateForm from "./CreateForm";

export default function FormPage({title, path, fields}) {
    const [item, setItem] = useState(null);
    const [itemLoaded, setItemLoaded] = useState(false);
    let {pk} = useParams();


    useEffect(() => {
        if (pk !== undefined) {
            getApi().get(`${path}/${pk}/`)
                .then(response => {
                    setItem(response.data);
                    setItemLoaded(true);
                })
                .catch((response) => {
                    console.log(response);
                });
        }
    }, []);


    let dynamicHeight = 'calc(100vh - 90px)';
    return (
        <Grid className="animated fadeIn" columns='equal' style={{marginLeft: "0", marginTop: "0", marginRight: "0"}}>
            <Grid.Row style={{margin: "0", padding: "0"}}>
                <Grid.Column style={{
                    padding: "0",
                    width: "100%"
                }}>
                    {pk === undefined && (
                        <CreateForm title={title} path={path} fields={fields}/>
                    )}
                    {itemLoaded && (
                        <EditForm title={title} path={path} fields={fields} item={item}/>
                    )}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );

}

