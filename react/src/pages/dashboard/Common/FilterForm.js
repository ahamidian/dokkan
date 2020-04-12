import React, {useEffect, useState} from 'react';
import {Card, Button, Form, Grid, GridColumn, Container} from "semantic-ui-react"
import {getApi} from "../../../api";
import {useHistory} from 'react-router-dom';
import Field from "./Field";

export default function FilterForm({fields, title , onClick}) {
    const [formData, setFormData] = useState({});


    return (
        <>
            <Card className="p-2" style={{width: "auto"}}>
                <Card.Content>
                    <Card.Header>
                        <h3>فیلتر کردن {title} ها </h3>
                    </Card.Header>
                    <Form style={{marginTop: "20px", marginBottom: "20px"}}>
                        <Grid style={{flexDirection: "row-reverse"}}>
                            {fields.map((field) => <Field field={field} data={formData} setData={setFormData} full={true}/>)}
                        </Grid>
                    </Form>
                </Card.Content>
            </Card>
            <Button positive onClick={()=>onClick(formData)} floated="right" className="mr-3">فیلتر کن</Button>
        </>
    );

}