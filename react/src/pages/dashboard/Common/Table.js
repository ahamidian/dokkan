import React, {useEffect, useState} from 'react';
import {Button, Menu, Table, Checkbox} from 'semantic-ui-react'
import {getApi} from "../../../api";
import {useHistory} from "react-router-dom";

export default function MyTable({fields, path, filters, bulkEditEnabled,onBulkEditClicked,chosenItems, setChosenItems}) {
    const [page, setPage] = useState(1);
    const pageSize = 12;
    const [endPage, setEndPage] = useState(1);
    const [items, setItems] = useState([]);
    const [ordering, setOrdering] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setPage(1);
        setOrdering([]);
        setLoading(true)
    }, [path]);


    useEffect(() => {
        setLoading(true)
    }, [page]);

    useEffect(() => {
        setPage(1);
        setLoading(true)
    }, [filters, ordering]);

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
            }).join('&') + `&ordering=${ordering}&page=${page}`;

        getApi().get(url, true)
            .then(response => {
                setItems(response.data.results);
                setEndPage(Math.ceil(response.data.count / pageSize));
                setLoading(false);
            })
            .catch((resp) => {
                setLoading(false);
            });
    }

    function renderTitle(field) {
        return (
            <Table.HeaderCell textAlign='right'
                              onClick={() => setOrdering((ordering === field.name) ? `-${field.name}` : ordering === `-${field.name}` ? null : field.name)}>
                    <span style={{
                        fontSize: ordering && ordering.includes(field.name) ? 12 : 20,
                        color: ordering && ordering.includes(field.name) ? "black" : "#cccccc"
                    }}>
                    {ordering === field.name ? '▲' : ordering === `-${field.name}` ? '▼' : '⥯'}
                  </span>

                {field.label}

            </Table.HeaderCell>
        )
    }

    function renderRow(item) {
        return (
            <Table.Row>
                {fields.slice(0).reverse().map(field => <Table.Cell textAlign='right'
                                                                    onClick={() => history.push(`/dashboard/${path}/edit/${item.pk}`)}>{item[field.name]}</Table.Cell>)}
                {bulkEditEnabled && (
                    <Table.Cell textAlign='right'><Checkbox onChange={(event,data)=>{
                       if(data.checked){
                           let items=[...chosenItems,item];
                           setChosenItems(items);
                       }else {
                           let items=chosenItems.filter(chosenItem=>chosenItem!==item);
                           setChosenItems(items);
                       }
                    }}/></Table.Cell>
                )}
            </Table.Row>
        )
    }

    return (
        <div style={{height: "100%"}}>
            <Table celled striped selectable unstackable sortable>
                <Table.Header>
                    <Table.Row>
                        {fields.slice(0).reverse().map(field => renderTitle(field))}
                        {bulkEditEnabled && (
                            <Table.HeaderCell textAlign='right'><Checkbox/></Table.HeaderCell>
                        )}
                    </Table.Row>
                </Table.Header>

                <Table.Body style={{height: 300, overflowY: "scroll"}}>
                    {items && items.map(item => renderRow(item))}
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan={bulkEditEnabled ? fields.length + 1 : fields.length}>
                            <Menu floated='right' pagination>
                                {page > 2 && <Menu.Item as='a' onClick={() => setPage(1)}>{1}</Menu.Item>}
                                {page > 3 && <Menu.Item as='a' disabled>...</Menu.Item>}
                                {page > 1 && <Menu.Item as='a' onClick={() => setPage(page - 1)}>{page - 1}</Menu.Item>}
                                <Menu.Item as='a' active>{page}</Menu.Item>
                                {page < endPage &&
                                <Menu.Item as='a' onClick={() => setPage(page + 1)}>{page + 1}</Menu.Item>}
                                {page < endPage - 2 && <Menu.Item as='a' disabled>...</Menu.Item>}
                                {page < endPage - 1 &&
                                <Menu.Item as='a' onClick={() => setPage(endPage)}>{endPage}</Menu.Item>}
                            </Menu>
                            {chosenItems.length>0 &&(
                                <Button primary onClick={onBulkEditClicked}>Edit</Button>
                            )}
                            <Button primary onClick={() => history.push(`/dashboard/${path}/create`)}>Create
                                New</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );

}
