import React from 'react';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/core/styles";
import TableMultiSelectToolbar from "./TableMultiSelectToolbar";


const useStyles = makeStyles((theme) => ({
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    tableSortLabel: {
        fontFamily: "inherit !important",
    },
}));

export default function TableHeader({fields, bulkEditEnabled, ordering, setOrdering, numSelected, rowCount, onSelectAllClick}) {

    const classes = useStyles();

    function renderTitle(field) {
        return (
            <TableCell key={field.label} align="left"
                       classes={{root: classes.tableSortLabel}}
                       sortDirection={ordering === field.name ? 'asc' : ordering === `-${field.name}` ? 'desc' : false}>
                <TableSortLabel
                    active={ordering.includes(field.name)}
                    direction={ordering === field.name ? 'asc' : 'desc'}
                    onClick={() => setOrdering((ordering === field.name) ? `-${field.name}` : ordering === `-${field.name}` ? "" : field.name)}
                    style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>

                    {field.label}
                    {ordering.includes(field.name) ?
                        (
                            <span className={classes.visuallyHidden}>
                          {ordering === `-${field.name}` ? 'sorted descending' : 'sorted ascending'}
                        </span>
                        ) : null}
                </TableSortLabel>


            </TableCell>
        )
    }

    return (
        <TableHead>
            <TableRow>
                {bulkEditEnabled && (
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{'aria-label': 'select all desserts'}}
                        />
                    </TableCell>
                )}

                {fields.map(field => renderTitle(field))}

            </TableRow>
        </TableHead>
    );

}