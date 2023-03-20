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
import { mockDataProduct } from "../../data/mockData"
import { Inject, Page, Toolbar, Edit } from "@syncfusion/ej2-react-grids"
import {
  gridTemplate,
  stockTemplate,
} from "../../assets/template/SyncTemplates"

const ProductList = () => {

    const pageSettings = { pageSize: 15 }
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Search']
    const numberRules = { required: true, number: true }
    const textRules = { required: true, minLength: 2,  }
    const gridRef = useRef(null)
    const editOptions = { allowEditing: false, allowAdding: true, allowDeleting: true, mode: 'Dialog' }

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
                    dataSource={mockDataProduct}
                    toolbar={toolbarOptions}
                    ref={gridRef}
                    created={onCreated}
                    editSettings={editOptions}
                    pageSettings={pageSettings}
                >
                    <ColumnsDirective>
                        <ColumnDirective field='ProductID' width='55' validationRules={numberRules} />
                        <ColumnDirective headerText='Image' field="sr" width='100' template={gridTemplate} textAlign="center" editType='dropdownedit'/>
                        <ColumnDirective field='details' width='100' validationRules={textRules} />
                        <ColumnDirective field='amount' width='100'  validationRules={textRules} />
                        <ColumnDirective field='stock' width='100' editType='dropdownedit' validationRules={textRules} template={stockTemplate} />
                        <ColumnDirective field='production' width='100' editType='datepickeredit' format='yMd' />
                        <ColumnDirective field='expo' width='100' editType='datepickeredit' format='yMd' />
                    </ColumnsDirective>
                    <Inject services={[Page, Filter, Toolbar, Edit]}/>
                </GridComponent>
            </DataTablesContainer>
        </Container>
    )
}

export default ProductList