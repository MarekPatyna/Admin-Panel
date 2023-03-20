import React, { useRef } from "react"
import {
  ConditionalFormatting,
  Inject,
  NumberFormatting,
  PivotViewComponent,
} from "@syncfusion/ej2-react-pivotview"
import {
  Container,
  InvoicesContainer,
} from "../../styles/datatables/Balances-styled"
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data"

const Balances = () => {

    const pivotObj = useRef(null)

    const remoteData = new DataManager({
        url: 'https://bi.syncfusion.com/northwindservice/api/orders',
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    })

    const jsonReport = {
        dataSource: remoteData,
        type: 'JSON',
        expandAll: true,
        filters: [],
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }],
    }

    return (
        <Container>
            <InvoicesContainer>
                <PivotViewComponent
                    ref={pivotObj}
                    dataSourceSettings={jsonReport}
                    width='100%'
                    height='100%'
                >
                    <Inject services={[ ConditionalFormatting, NumberFormatting]}/>
                </PivotViewComponent>
            </InvoicesContainer>
        </Container>
    )
}

export default Balances