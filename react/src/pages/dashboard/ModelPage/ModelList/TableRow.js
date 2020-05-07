import React from 'react';
import {useHistory} from 'react-router-dom';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";

export default function MyTableRow({item,editable, fields, path, bulkEditEnabled,handleClick,isItemSelected,labelId}) {
    const history = useHistory();
    function onClick(pk) {
        if(editable)
            history.push(`/dashboard/${path}/edit/${pk}`)
    }

    return (
        <TableRow
            hover
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={item.id}
            selected={isItemSelected}
        >
            {bulkEditEnabled && (
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={isItemSelected}
                        onClick={(event) => handleClick(event, item)}
                        inputProps={{'aria-labelledby': labelId}}
                    />
                </TableCell>
            )}
            {fields.map(field => (
                <TableCell key={field.name} onClick={() => onClick(item.pk)}>
                    {item[field.name]}
                </TableCell>))}

        </TableRow>
    );

}
