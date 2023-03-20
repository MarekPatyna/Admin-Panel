import React, { useRef } from "react"
import {
  ChartContainer,
  Container,
  MainContainer,
} from "../../styles/charts/Chart-styled"
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  AreaSeries,
  PolarSeries,
  RadarSeries,
} from "@syncfusion/ej2-react-charts"
import { data6, data7, data8 } from "../../data/mockData"
import { Browser } from "@syncfusion/ej2-base"

const Area = () => {

    const gridRef = useRef(null)

    return (
        <Container>
            <MainContainer>
                <ChartContainer>
                    <ChartComponent
                        id='charts'
                        titleStyle={{color: '#5b6e88'}}
                        ref={gridRef}
                        primaryXAxis={{
                            valueType: 'Category',
                            labelPlacement: 'OnTicks',
                            interval: 1,
                            coefficient: Browser.isDevice ? 80 : 100
                        }}
                        primaryYAxis={{
                            title: 'Revenue in Millions',
                            labelFormat: '{value}M'
                        }}
                        title="Average Sales Comparison"
                        height='100%'
                        width='100%'
                    >
                        <Inject services={[AreaSeries, Legend, Category, PolarSeries, RadarSeries]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data6} xName='x' yName='y' name='Product A' width={2}
                                             opacity={0.5} type='Polar' drawType='Area' border={{ color: 'transparent' }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data7} xName='x' yName='y' name='Product B' width={2}
                                             opacity={0.5} type='Polar' drawType='Area' border={{ color: 'transparent' }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data8} xName='x' yName='y' name='Product C' width={2}
                                             opacity={0.5} type='Polar' drawType='Area' border={{ color: 'transparent' }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </ChartContainer>
            </MainContainer>
        </Container>
    )
}

export default Area