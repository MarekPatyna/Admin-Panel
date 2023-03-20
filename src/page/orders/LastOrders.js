import React, { useRef } from "react"
import {
  Container,
  DataTablesContainer,
} from "../../styles/datatables/DataGrid-styled"
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
} from "@syncfusion/ej2-react-grids"
import { mockDataContacts } from "../../data/mockData"
import { Inject, Page, Sort, Toolbar, Edit } from "@syncfusion/ej2-react-grids"
import {
  statusTemplate,
  paymentTemplate,
} from "../../assets/template/SyncTemplates"

const LastOrders = () => {

    const pageSettings = { pageSize: 15 }
    const textRules = { required: true, minLength: 2,  }
    const gridRef = useRef(null)
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Search', 'Print']
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' }

    const sortSettings = { columns: [
            { field: 'id', direction: 'Ascending' }
        ] }

    const onCreated = () => {
        const searchbar = document.getElementById(gridRef.current.element.id + "_searchbar")
        searchbar.addEventListener('keyup', (event) => {
            gridRef.current.search(event.target.value)
        })
    }

    return (
        <Container>
            <DataTablesContainer>
                <GridComponent
                    height="100%"
                    dataSource={mockDataContacts}
                    allowSorting={true}
                    sortSettings={sortSettings}
                    toolbar={toolbarOptions}
                    ref={gridRef}
                    created={onCreated}
                    editSettings={editOptions}
                    pageSettings={pageSettings}
                >
                    <ColumnsDirective>
                        <ColumnDirective field='id' width='10'  />
                        <ColumnDirective field='name' width='20' validationRules={textRules} />
                        <ColumnDirective field='address' width='40'  validationRules={textRules} />
                        <ColumnDirective field='status' width='20'  editType='dropdownedit'  template={statusTemplate} />
                        <ColumnDirective field='payment' width='20' editType='dropdownedit' template={paymentTemplate} />
                        <ColumnDirective field='total' width='20' />
                    </ColumnsDirective>
                    <Inject services={[Page, Filter, Toolbar, Edit, Sort]}/>
                </GridComponent>
            </DataTablesContainer>
        </Container>
    )
}
export default LastOrders