import React, { useRef } from "react"
import {
  Category,
  ChartComponent,
  Highlight,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingLineSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts"
import { data14 } from "../../data/mockData"

const VisitsChart = () => {

    const chline = useRef(null)

    return (
        <ChartComponent
            id='chlinedb'
            primaryXAxis={{ majorGridLines: { width: 0 }, minorGridLines: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, interval: 1, lineStyle: { width: 0 }, valueType: 'Category' }}
            primaryYAxis={{ lineStyle: { width: 0 }, minimum: 0, interval: 100, majorTickLines: { width: 0 }, majorGridLines: { width: 1 }, minorGridLines: { width: 1 }, minorTickLines: { width: 0 }, labelFormat: '{value}', }}
            tooltip={{ enable: true }}
        >
            <Inject services={[StackingLineSeries, Category, Legend, Tooltip, Highlight]}/>
            <SeriesCollectionDirective>
                <SeriesDirective
                    dataSource={data14}
                    ref={chline}
                    xName='x'
                    yName='y'
                    width={2}
                    type='StackingLine'
                    marker={{ isFilled: true, visible: true, shape: 'Circle', width: 7, height: 7 }}
                >
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default VisitsChart