import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button";
import BulkEditModal from "./BulkEditModal";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        position: "absolute",
        width: "calc(100% - 322px)",
        backgroundColor: "#ffffff",
        zIndex: 2,
        marginLeft: 50,
        minHeight: 57,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            width: "100%",
            position: "relative",
        },
    },
    title: {
        marginRight: "1rem",
    },
}));

export default function TableMultiSelectToolbar({items,fields,title}) {
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
        <>
            <BulkEditModal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} items={items} fields={fields} title={title} />

            <Toolbar className={classes.root}>
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {`${items.length} مورد انتخاب شده است`}
                </Typography>

                <Button
                    color="primary"
                    variant="outlined"
                    size="medium"
                    onClick={()=>setModalIsOpen(true)}
                    startIcon={<EditIcon/>}
                >
                    {`ویرایش`}
                </Button>
            </Toolbar>
        </>
    );
};