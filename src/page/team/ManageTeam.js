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
import { mockDataTeam } from "../../data/mockData"
import { Inject, Page, Sort, Toolbar, Edit } from "@syncfusion/ej2-react-grids"

const ManageTeam = () => {

    const gridRef = useRef(null)
    const pageSettings = { pageSize: 20 }
    const numberRules = { required: true, number: true }
    const textRules = { required: true, minLength: 2,  }
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Search', 'Print']
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' }

    const sortSettings = { columns: [
            { field: 'name', direction: 'Ascending' },
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
                    height='100%'
                    dataSource={mockDataTeam}
                    allowPaging={true}
                    allowSorting={true}
                    sortSettings={sortSettings}
                    toolbar={toolbarOptions}
                    ref={gridRef}
                    created={onCreated}
                    editSettings={editOptions}
                    pageSettings={pageSettings}
                >
                    <ColumnsDirective>
                        <ColumnDirective type='checkbox' width='25' />
                        <ColumnDirective field='name' width='50' validationRules={textRules} />
                        <ColumnDirective field='position' width='50' editType='dropdownedit' validationRules={textRules}  />
                        <ColumnDirective field='office' width='50'  validationRules={textRules} />
                        <ColumnDirective field='start' width='50' editType='datepickeredit' format='yMd' />
                        <ColumnDirective field='salary' width='50' validationRules={numberRules}/>
                        <ColumnDirective field='email' width='70' validationRules={textRules} />
                        <ColumnDirective field='age' width='35' validationRules={numberRules} />
                        <ColumnDirective field='phone' width='45' validationRules={numberRules}/>
                    </ColumnsDirective>
                    <Inject services={[Page, Filter, Toolbar, Edit, Sort]} />
                </GridComponent>
            </DataTablesContainer>
        </Container>
    )
}

export default ManageTeam