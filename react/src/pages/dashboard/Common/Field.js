import React from 'react';
import {Button, Grid, GridColumn} from "semantic-ui-react"
import Select from 'react-select'
import ImageUploader from 'react-images-upload';
import Map from "../Map";
import {FixedSizeList as List} from "react-window";


export default function Field({field, data, setData,full=false}) {
    let computerSize=full?16:8;
    let key = field.name;
    if (["tel", "text", "number", "password"].indexOf(field.type) >= 0) {
        return (
            <GridColumn computer={computerSize} tablet={computerSize} mobile={16}>
                <label style={{float: "right"}}>{field.label}</label>
                <input style={{textAlign: "right"}} placeholder={field.label} type={field.type} value={data[key]}
                       onChange={(event) => setData({...data, [key]: event.target.value})}/>
            </GridColumn>
        );
    } else if (field.type === "select") {
        return (
            <GridColumn computer={computerSize} tablet={computerSize} mobile={16}>
                <div style={{textAlign: "right"}}>
                    <label>{field.label}</label>
                </div>
                <Select isRtl={true} placeholder={'انتخاب ' + field.label} options={field.options} isSearchable
                        components={{MenuList}}
                        value={field.options.find(option => option.value === data[key])}
                        onChange={(selectedOption) => setData({...data, [key]: selectedOption.value})}/>
            </GridColumn>
        );
    } else if (field.type === "file") {
        return (
            <GridColumn computer={computerSize} tablet={computerSize} mobile={16}>
                <label style={{float: "right"}}>{field.label}</label>
                <ImageUploader
                    withIcon={false}
                    withPreview={true}
                    buttonText='Choose image'
                    onChange={() => console.log("ds")}
                    imgExtension={['.jpg', '.png']}
                    maxFileSize={5242880}
                />
            </GridColumn>
        );
    } else if (field.type === "map") {
        return (
            <GridColumn mobile={16}>
                <Map onClick={({lat, lng}) => setData({...data, latitude: lat, longitude: lng})}
                     lat={data["latitude"]} lng={data["longitude"]}/>
            </GridColumn>
        );
    } else if (field.type === "multi") {
        return (
            <GridColumn mobile={16}>
                <label style={{float: "right"}}>{field.label}</label>
                {data[key] && data[key].map((line, index) => {
                    return (
                        <Grid>
                            {field.fields.map((subField) => <Field field={subField} data={data[key][index]}
                                                                   setData={(value) => {
                                                                       data[key][index] = value;
                                                                       setData({...data, [key]: data[key]})
                                                                   }}/>)}
                        </Grid>
                    )
                })}

                <Button onClick={() => {
                    if (!data[key]) {
                        data[key] = [];
                    }
                    data[key].push({});
                    setData({...data, [key]: data[key]})
                }}> add</Button>
            </GridColumn>
        );
    }
}

const height = 35;

function MenuList({options, children, maxHeight, getValue}) {


    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;
    if (options.length * height < maxHeight) {
        maxHeight = options.length * height;
    }
    return (
        <List
            height={maxHeight}
            itemCount={children.length}
            itemSize={height}
            initialScrollOffset={initialOffset}
        >
            {({index, style}) => <div style={{...style, textAlign: "right"}}>{children[index]}</div>}
        </List>
    );

}