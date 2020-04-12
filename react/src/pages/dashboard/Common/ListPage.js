import React, {useState} from 'react';
import {Grid} from "semantic-ui-react"
import MyTable from "./Table";
import FilterForm from "./FilterForm";
import BulkEditModal from "./BulkEditModal";

export default function ListPage({title, path, filters, columns, bulkEditFields}) {

    const [activeFilters, setActiveFilters] = useState([]);
    const [showBulkEditModal, setShowBulkEditModal] = useState(false);
    const [chosenItems, setChosenItems] = useState([]);

    return (
        <>
            <BulkEditModal title={title} fields={bulkEditFields}
                           onClick={(formData) => setActiveFilters(formData)}
                           isOpen={showBulkEditModal}
                           setIsOpen={setShowBulkEditModal}
                           items={chosenItems}/>
            <Grid className="animated fadeIn" columns='equal'
                  style={{marginLeft: "0", marginTop: "0", marginRight: "0"}}>
                <Grid.Row style={{margin: "0", padding: "0"}}>
                    <Grid.Column style={{
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",
                        backgroundColor: "#f4f4f4",
                        padding: "0",
                        maxWidth: "300px",
                        minWidth: "300px"
                    }}>
                        {filters && (
                            <FilterForm title={title} fields={filters}
                                        onClick={(formData) => setActiveFilters(formData)}/>
                        )}
                    </Grid.Column>
                    <Grid.Column style={{padding: "0"}}>
                        <MyTable title={title} path={path} fields={columns} filters={activeFilters}
                                 bulkEditEnabled={true}
                                 chosenItems={chosenItems}
                                 setChosenItems={setChosenItems}
                                 onBulkEditClicked={() => {
                                     setShowBulkEditModal(true);
                                 }}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );

}
