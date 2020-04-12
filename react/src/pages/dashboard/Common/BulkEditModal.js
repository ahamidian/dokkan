import React, {Fragment, useState} from 'react';
import {Modal, Button, TransitionablePortal, Card, Form, Grid} from "semantic-ui-react"
import Field from "./Field";

export default function BulkEditModal({fields, title, isOpen,setIsOpen,items}) {
    const [formData, setFormData] = useState({});
    function onClose(){
        setIsOpen(false);
        document.body.classList.remove('modal-fade-in');
    }

    function onEditClicked(){


    }


    return (
        <Fragment>
            <TransitionablePortal
                open={isOpen}
                onOpen={() => setTimeout(() => document.body.classList.add('modal-fade-in'), 0)}
                // onClose={this.close}
                transition={{animation: 'fade down', duration: 300}}>
                <Modal open={true}
                       onClose={onClose}
                       centered={false}
                       style={{maxWidth: "800px"}}>
                    <Modal.Header> فیلتر کردن {title} ها </Modal.Header>
                    <Modal.Content>

                        <Form style={{marginTop: "20px", marginBottom: "20px"}}>
                            <Grid style={{flexDirection: "row-reverse"}}>
                                {fields.map((field) => <Field field={field} data={formData}
                                                              setData={setFormData} full={true}/>)}
                            </Grid>
                        </Form>


                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button positive onClick={onEditClicked} floated="right" className="mr-3">ویرایش</Button>
                    </Modal.Actions>
                </Modal>
            </TransitionablePortal>
        </Fragment>
    );
}
