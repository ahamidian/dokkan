import React from 'react';
import ImageUploader from 'react-images-upload';
import Map from "./Map";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MySelect from "../ModelList/MySelect";

export default function Field({field, data, setData, computerSize = 6}) {
    let key = field.name;
    if (["tel", "text", "number", "password"].indexOf(field.type) >= 0) {
        return (
            <Grid item md={computerSize} xs={12} style={{padding: 12}}>
                <TextField style={{width: "100%"}} label={field.label} variant="outlined"
                           InputLabelProps={{shrink: data[key] && data[key] !== ""}}
                           value={data[key]}
                           onChange={(event) => setData({...data, [key]: event.target.value})}/>
            </Grid>

        );
    } else if (field.type === "select") {
        return (
            <Grid item md={computerSize} xs={12} style={{padding: 12}}>
                <MySelect options={field.options} label={field.label}
                          value={field.options.find(option => option.value === data[key]) || (field.default)}
                          onChange={(event, selectedOption) => {
                              if (selectedOption) {
                                  setData({...data, [key]: selectedOption.value})
                              } else {
                                  if (field.default) {
                                      setData({...data, [key]: field.default.value})
                                  } else {
                                      delete data[key];
                                      setData(data);
                                  }
                              }

                          }}/>
            </Grid>
        );
    } else if (field.type === "file") {
        return (
            <Grid item md={computerSize} xs={12} style={{padding: 12}}>
                <label style={{float: "right"}}>{field.label}</label>
                <ImageUploader
                    withIcon={false}
                    withPreview={true}
                    buttonText='Choose image'
                    imgExtension={['.jpg', '.png']}
                    maxFileSize={5242880}
                />
            </Grid>
        );
    } else if (field.type === "map") {
        return (
            <Grid item xs={12} style={{padding: 12}}>
                <Map onClick={({lat, lng}) => setData({...data, latitude: lat, longitude: lng})}
                     lat={data["latitude"]} lng={data["longitude"]}/>
            </Grid>
        );
    } else if (field.type === "multi") {
        return (
            <Grid container item xs={12} style={{padding: 12}} direction="column">
                <label style={{float: "right"}}>{field.label}</label>
                <div style={{marginRight: 20}}>
                    {data[key] && data[key].map((line, index) => {
                        return (
                            <Grid container>
                                {field.fields.map((subField) => <Field field={subField} data={data[key][index]}
                                                                       setData={(value) => {
                                                                           data[key][index] = value;
                                                                           setData({...data, [key]: data[key]})
                                                                       }}/>)}
                            </Grid>
                        )
                    })}
                </div>
                <Button
                    color="primary"
                    variant="contained"
                    size="medium"
                    style={{marginTop: 20,}}
                    onClick={() => {
                        if (!data[key]) {
                            data[key] = [];
                        }
                        data[key].push({});
                        setData({...data, [key]: data[key]})
                    }}> اضافه کردن</Button>
            </Grid>
        );
    }
}

