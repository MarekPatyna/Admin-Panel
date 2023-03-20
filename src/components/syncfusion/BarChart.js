import React from "react"
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  Highlight,
} from "@syncfusion/ej2-react-charts"
import { Browser } from "@syncfusion/ej2-base"
import { data10, data11, data12 } from "../../data/mockData"

const BarChart = () => {

    return (
        <ChartComponent
            id='chline'
            style={{ textAlign: "center",  }}
            legendSettings={{ enableHighlight: true }}
            primaryXAxis={{ labelIntersectAction: Browser.isDevice ? 'None' : 'Trim', labelRotation: Browser.isDevice ? -45 : 0, valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, edgeLabelPlacement: 'Shift' }}
            primaryYAxis={{
                majorTickLines: { width: 0 }, lineStyle: { width: 0 }, maximum: 50, interval: 10,
            }}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true, shared: true }}
            titleStyle={{color: '#5b6e88'}}
            title='Sales to country'
        >
            <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel, Highlight]}/>
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data10} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Monthly' type='Column'>
                </SeriesDirective>
                <SeriesDirective dataSource={data11} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Quarterly' type='Column'>
                </SeriesDirective>
                <SeriesDirective dataSource={data12} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Annual' type='Column'>
                </SeriesDirective>

            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default BarChart