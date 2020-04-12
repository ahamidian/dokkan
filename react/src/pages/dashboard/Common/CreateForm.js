import React, {useEffect, useState} from 'react';
import {Card, Button, Form, Grid, GridColumn, Container} from "semantic-ui-react"
import {getApi} from "../../../api";
import {useHistory} from 'react-router-dom';
import Field from "./Field";

export default function CreateForm({fields, title, path}) {
    const [formData, setFormData] = useState({});
    const history = useHistory();


    function attemptCreate() {
        getApi().post(`${path}/`, formData)
            .then(response => {
                history.push(`/dashboard/${path}`);
            })
            .catch((response) => {
                console.log(response);
            });

    }

    return (
        <>
            <Card className="p-2" style={{width: "auto"}}>
                <Card.Content>
                    <Card.Header>
                        <h3>Create New {title}</h3>
                    </Card.Header>
                    <Form style={{marginTop: "20px", marginBottom: "20px"}}>
                        <Grid style={{flexDirection: "row-reverse"}}>
                            {fields.map((field) => <Field field={field} data={formData} setData={setFormData}/>)}
                        </Grid>
                    </Form>
                </Card.Content>
            </Card>
            <Button positive onClick={attemptCreate} floated="right" className="mr-3">Save</Button>
        </>
    );

}