import React, { useRef } from "react"
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
  AccumulationLegend,
} from "@syncfusion/ej2-react-charts"
import { data13 } from "../../data/mockData"


const PyramidChart = () => {


    const gridRef = useRef(null)

    return (
        <AccumulationChartComponent
            legendSettings={{ visible: false }}
            ref={gridRef}
            id='charts'
            title='Sales Comparison Chart'
            tooltip={{ enable: true, format: '${point.x} : <b>${point.y} cal</b>' }}
            titleStyle={{color: '#5b6e88'}}

        >
            <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection, AccumulationLegend]}/>
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data13} xName='x' yName='y' type='Pyramid' width={'45%'} height='80%' neckWidth='15%' gapRatio={0.03} explode={true} emptyPointSettings={{ mode: 'Drop', fill: 'red' }} dataLabel={{
                    visible: true,
                    name: 'text',
                    position: 'Outside',
                    connectorStyle: { length: '20px' },
                    font: {
                        fontWeight: '600'
                    }
                }}>
                </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    )
}

export default PyramidChart