import React, {useState} from 'react';
import MyTable from "./Table";
import BulkEditModal from "./BulkEditModal";
import Spinner from "react-spinkit";
import {PRIMARY_COLOR} from "../../../../constants";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {useHistory} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import FilterForm2 from "./FilterForm2";
import {getApi} from "../../../../api";
import {useSnackbar} from "notistack";
import fileDownload from "js-file-download"
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 20,
        fontWeight: 450,
        margin: 0,
    },
    tableRoot: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));
export default function ListPage({config, path, filters, columns, bulkEditFields, bulkEditEnabled, state}) {
    const classes = useStyles();
    const history = useHistory();

    const [activeFilters, setActiveFilters] = useState([]);
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    function downloadCsv() {
        getApi().get(`dashboard/${path}/export_csv/`, true)
            .then(response => {
                enqueueSnackbar("درخواست شما با موفقیت انجام شد.",{variant: 'success'});
                fileDownload(response.data, 'report.csv')
            })
            .catch((response) => {
                console.log(response);
                enqueueSnackbar("خطایی پیش آمد. دوباره تلاش کنید.",{variant: 'error'});
            });
    }

    if (state === "loading") {
        return (
            <div style={{flex: 1, marginTop: 50, width: "100%"}}>
                <Spinner name="ball-grid-pulse" color={PRIMARY_COLOR} fadeIn="none" style={{margin: "auto"}}/>
            </div>
        )
    }

    return (
        <>
            <Grid container>
                <Grid container item xs={12} direction="row" alignItems="center" justify="space-between">
                    <Grid item container alignItems="center" xs={12} sm={8}>
                        <p className={classes.title}>  {`لیست ${config.title} `}</p>
                        <Button
                            style={{marginRight:12,}}
                            size="medium"
                            onClick={downloadCsv}
                            startIcon={<SaveAltIcon/>}
                        >
                            گرفتن خروجی
                        </Button>
                    </Grid>
                    {config.creatable && (
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                className={classes.button}
                                onClick={() => history.push(`/dashboard/${path}/create`)}
                                startIcon={<AddCircleOutlineOutlinedIcon/>}
                            >
                                {`${config.single_item} جدید`}
                            </Button>
                        </Grid>
                    )}

                </Grid>
                <Grid item xs={12} className={classes.tableRoot}>
                    <Paper className={classes.paper}>
                        {filters && (
                            <FilterForm2 fields={filters}
                                         onClick={(formData) => setActiveFilters(formData)}/>
                        )}
                        <MyTable title={config.title} editable={config.editable} bulkEditFields={bulkEditFields} path={path} fields={columns}
                                 filters={activeFilters} bulkEditEnabled={bulkEditEnabled}/>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );

}
