import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {getApi} from "../../../../api";
import TableHeader from "./TableHeader";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import MyTableRow from "./TableRow";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Box} from "@material-ui/core";
import Spinner from "react-spinkit";
import {PRIMARY_COLOR} from "../../../../constants";
import TableMultiSelectToolbar from "./TableMultiSelectToolbar";
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    table: {
        width: "100%",
        position: "relative",

    },
    tableLoading: {
        '&:after': {
            content: '...loading',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background: "rgba(255, 255, 255, .5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    }
}));
export default function MyTable({title,editable,fields, path, filters, bulkEditEnabled, bulkEditFields}) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);
    const [ordering, setOrdering] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [chosenItems, setChosenItems] = useState([]);


    useEffect(() => {
        setPage(0);
        setOrdering([]);
        setLoading(true);
        setChosenItems([]);
    }, [path]);


    useEffect(() => {
        setLoading(true)
    }, [page]);

    useEffect(() => {
        setPage(0);
        setLoading(true)
    }, [filters, ordering,rowsPerPage]);

    useEffect(() => {
        if (loading) {
            fetchData()
        }
    }, [loading]);

    function fetchData() {
        let url = path + '/?' +
            Object.keys(filters).map(function (key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(filters[key]);
            }).join('&') + `&ordering=${ordering}&limit=${rowsPerPage}&offset=${page*rowsPerPage}`;

        getApi().get("dashboard/"+url, true)
            .then(response => {
                setItems(response.data.results);
                setCount(response.data.count);
                setLoading(false);
            })
            .catch((resp) => {
                setLoading(false);
                setError(true);
            });
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setChosenItems([]);
    };
    const handleChangeRowsPerPage = (event) => {
        setChosenItems([]);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            setChosenItems(items);
            return;
        }
        setChosenItems([]);
    };
    const isSelected = (item) => chosenItems.indexOf(item) !== -1;

    const handleClick = (event, item) => {
        const selectedIndex = chosenItems.indexOf(item);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(chosenItems, item);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(chosenItems.slice(1));
        } else if (selectedIndex === chosenItems.length - 1) {
            newSelected = newSelected.concat(chosenItems.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                chosenItems.slice(0, selectedIndex),
                chosenItems.slice(selectedIndex + 1),
            );
        }

        setChosenItems(newSelected);
    };
    const emptyRows = Math.max(0, 8 - items.length);

    return (
        <>
            {chosenItems.length > 0 && (
                <TableMultiSelectToolbar items={chosenItems} fields={bulkEditFields} title={title}/>
            )}
            <TableContainer>

                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={'medium'}
                    aria-label="enhanced table"
                >
                    <TableHeader fields={fields} ordering={ordering} setOrdering={setOrdering}
                                 bulkEditEnabled={bulkEditEnabled}
                                 numSelected={chosenItems.length}
                                 onSelectAllClick={handleSelectAllClick}
                                 rowCount={items.length}/>
                    <TableBody>
                        {loading && (
                            <Box
                                bgcolor="#ffffffcc" color="black" position="absolute"
                                top={0} left={0} right={0} bottom={0} zIndex={2}
                                display="flex" justifyContent="center" alignItems="center"
                            >
                                <Spinner name="ball-grid-pulse" color={PRIMARY_COLOR} fadeIn="none"/>
                            </Box>
                        )}
                        {error && (
                            <Box
                                bgcolor="#ffffffcc" color="black" position="absolute"
                                top={0} left={0} right={0} bottom={0} zIndex={2}
                                display="flex" justifyContent="center" alignItems="center"
                            >
                                <p style={{textAlign: "center"}}>خطایی پیش آمد، دوباره تلاش کنید.</p>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    onClick={() => {
                                        setLoading(true);
                                        setError(false);
                                    }}
                                >
                                    تلاش مجدد
                                </Button>
                            </Box>
                        )}

                        {items.map((item, index) => {
                            const isItemSelected = isSelected(item);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <MyTableRow key={item.id} editable={editable} labelId={labelId} isItemSelected={isItemSelected}
                                            handleClick={handleClick} item={item}
                                            path={path} fields={fields} bulkEditEnabled={bulkEditEnabled}/>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow key={"emptyRow"} style={{height: 53 * emptyRows}}>
                                <TableCell colSpan={6}/>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, 50,100]}
                component="div"
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                labelDisplayedRows={({from, to, count}) => `آیتم های ${from}-${to === -1 ? count : to} از ${count !== -1 ? count : "more than" + to}`}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                labelRowsPerPage="تعداد: "
            />
        </>
    );

}
