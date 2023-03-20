import React, { useRef } from "react"
import {
  ChartContainer,
  Container,
  MainContainer,
} from "../../styles/charts/Chart-styled"
import { Browser } from "@syncfusion/ej2-base"
import {
  ChartComponent,
  SeriesCollectionDirective,
  Highlight,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingLineSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts"
import { data9 } from "../../data/mockData"

const Line = () => {

    const gridRef = useRef(null)

    return (
        <Container>
            <MainContainer>
                <ChartContainer>
                    <ChartComponent
                        ref={gridRef}
                        id='charts'
                        height='100%'
                        titleStyle={{color: '#5b6e88'}}
                        width='100%'
                        style={{ textAlign: "center" }}
                        primaryXAxis={{ majorGridLines: { width: 0 }, minorGridLines: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, interval: 1, lineStyle: { width: 0 }, valueType: 'Category', labelRotation: Browser.isDevice ? -45 : 0, labelIntersectAction: Browser.isDevice ? 'None' : 'Trim' }}
                        primaryYAxis={{ lineStyle: { width: 0 }, minimum: 0, maximum: 400, interval: 100, majorTickLines: { width: 0 }, majorGridLines: { width: 1 }, minorGridLines: { width: 1 }, minorTickLines: { width: 0 }, labelFormat: '${value}', }}
                        legendSettings={{ enableHighlight: true }}
                        chartArea={{ border: { width: 0 } }}
                        title='Staff Expenses for Year'
                        tooltip={{ enable: true }}>
                        <Inject services={[StackingLineSeries, Category, Legend, Tooltip, Highlight]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data9} xName='x' yName='y' name='John' width={2} type='StackingLine' marker={{ isFilled: true, visible: true, shape: 'Circle', width: 7, height: 7 }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data9} xName='x' yName='y1' name='Peter' width={2} type='StackingLine' marker={{ isFilled: true, visible: true, shape: 'Diamond', width: 7, height: 7 }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data9} xName='x' yName='y2' name='Steve' width={2} type='StackingLine' marker={{ isFilled: true, visible: true, shape: 'Rectangle', width: 5, height: 5 }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data9} xName='x' yName='y3' name='Charle' width={2} type='StackingLine' marker={{ isFilled: true, visible: true, shape: 'Triangle', width: 6, height: 6 }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </ChartContainer>
            </MainContainer>
        </Container>
    )
}

export default Line