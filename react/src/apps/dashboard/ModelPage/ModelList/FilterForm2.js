import React, {useEffect, useState} from 'react';
import Field from "../ModelForm/Field";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: theme.spacing(2),
    },
}));
export default function FilterForm2({fields, onClick}) {
    const [formData, setFormData] = useState({});
    const classes = useStyles();

    useEffect(() => {
        // fields.map((field) =>{
        //     if(field.t)
        // })
        //
        // data = {...formData, [key]: null};
        // field.options = [...field.options, {label: "all", value: null}];
    }, []);


    return (

        <Grid container direction="row" alignItems="center">
            {fields.map((field) => <Field key={field.lable} field={field} data={formData} setData={setFormData} labeled={false}
                                          computerSize={3}/>)}
            <Button color="primary" variant="contained" size="medium" className={classes.button}
                    onClick={() => onClick(formData)} style={{height: 40}}>فیلتر کن</Button>
        </Grid>

    );

}