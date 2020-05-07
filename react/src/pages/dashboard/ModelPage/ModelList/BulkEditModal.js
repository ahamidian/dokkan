import React, {Fragment, useState} from 'react';
import Field from "../ModelForm/Field";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function BulkEditModal({fields, title, isOpen, setIsOpen, items}) {
    const [formData, setFormData] = useState({});

    function onEditClicked() {


    }

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"> ویرایش {title} </DialogTitle>
            <DialogContent>
                <Grid container>
                    {fields && fields.map((field) => <Field field={field} data={formData}
                                                  setData={setFormData} computerSize={12}/>)}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" size="medium" color="primary" onClick={handleClose}>لغو</Button>
                <Button variant="contained" size="medium" color="primary" onClick={onEditClicked} floated="right" className="mr-3">ویرایش</Button>
            </DialogActions>
        </Dialog>
    );
}
