import React from "react"
import {
  ChartContainer,
  Container,
  MainContainer,
} from "../../styles/charts/Chart-styled"
import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts"
import { Browser } from "@syncfusion/ej2-base"
import { data1, data2, data3, data4 } from "../../data/mockData"

const Bar = () => {

    return (
        <Container>
            <MainContainer>
                <ChartContainer>
                    <ChartComponent
                        id='charts'
                        titleStyle={{color: '#5b6e88'}}
                        primaryXAxis={{ valueType: 'Category', majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, interval: 1, majorGridLines: { width: 0 } }}
                        primaryYAxis={{ majorTickLines: { width: 0 }, lineStyle: { width: 0 }, title: 'Units',}}
                        chartArea={{ border: { width: 0 } }}
                        enableSideBySidePlacement={false}
                        title='Top Dealers'
                        tooltip={{ enable: true, shared: true }}
                        height="100%"
                    >
                        <Inject services={[ColumnSeries, DataLabel, Category, Tooltip, Legend]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} xName='x' width={2} yName='y' name='Total' type='Column' columnWidth={0.5} marker={{ dataLabel: { visible: true, name: 'text', position: Browser.isDevice ? 'Outer' : 'Top', font: { fontWeight: '600', color: Browser.isDevice ? '' : '#ffffff' } } }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data2} xName='x' width={2} yName='y' name='Monthly' type='Column' columnWidth={0.4} marker={{ dataLabel: { visible: true, name: 'text', position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data3} xName='x' width={2} yName='y' name='Weekly' type='Column' columnWidth={0.3} marker={{ dataLabel: { visible: true, name: 'text', position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data4} xName='x' width={2} yName='y' name='Daily' type='Column' columnWidth={0.2} marker={{ dataLabel: { visible: true, name: 'text', position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </ChartContainer>
            </MainContainer>
        </Container>
    )
}

export default Bar