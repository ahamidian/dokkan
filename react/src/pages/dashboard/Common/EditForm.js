import React, {useEffect, useState} from 'react';
import {Card, Button, Form, Grid, GridColumn, Container} from "semantic-ui-react"
import {getApi} from "../../../api";
import {useHistory} from 'react-router-dom';
import Field from "./Field";

export default function EditForm({fields, item, title, path}) {
    const [formData, setFormData] = useState({});
    const history = useHistory();

    useEffect(() => {
        let itemData = {};
        fields.forEach((field) => {
            if (Object.keys(item).indexOf(field.name) >= 0) {
                itemData = {...itemData, [field.name]: item[field.name]}
            }
        });
        setFormData(itemData)

    }, []);


    function attemptEdit() {
        getApi().put(`${path}/${item.pk}/`, formData)
            .then(response => {
                history.push(`/dashboard/${path}`);
            })
            .catch((response) => {
                console.log(response);
            });
    }

    function attemptDelete() {
        getApi().delete(`${path}/${item.pk}/`)
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
                        <h3>Edit {title}</h3>
                    </Card.Header>
                    <Form style={{marginTop: "20px", marginBottom: "20px"}}>
                        <Grid style={{flexDirection: "row-reverse"}}>
                            {fields.map((field) => <Field field={field} data={formData} setData={setFormData}/>)}
                        </Grid>
                    </Form>
                </Card.Content>
            </Card>
            <Button negative onClick={attemptDelete} floated="left" className="ml-3">delete</Button>
            <Button positive onClick={attemptEdit} floated="right" className="mr-3">Save</Button>
        </>
    );

}