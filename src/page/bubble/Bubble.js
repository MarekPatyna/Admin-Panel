import React from "react"
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
  ScatterSeries,
  Tooltip,
  Highlight,
} from "@syncfusion/ej2-react-charts"
import {
  Cluster1Value,
  Cluster2Value,
  Cluster3Value,
  Cluster4Value,
  Cluster5Value,
} from "../../data/mockData"

const Bubble = () => {

    return (
        <Container>
            <MainContainer>
                <ChartContainer>
                    <ChartComponent
                        id='charts'
                        style={{ textAlign: "center" }}
                        titleStyle={{color: '#5b6e88'}}
                        title='Age of Buyers'
                        height='100%'
                        width='100%'
                        primaryXAxis={{ minimum: 40, maximum: 56, majorGridLines: { width: 0 }, edgeLabelPlacement: 'Shift' }}
                        primaryYAxis={{ majorTickLines: {width: 0}, minimum: 70, maximum: 140, interval: 10, lineStyle: {width: 0}, rangePadding: 'None' }}
                        legendSettings={{ visible: true, enableHighlight: true }}
                        tooltip={{ enable: true }}
                        chartArea={{ border: { width: 0 } }}>
                        <Inject services={[ScatterSeries, Legend, Tooltip, Category, Highlight]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={Cluster1Value} width={2} xName='Breadth' yName='Circumference' name='18-20 Years' type='Scatter' marker={{ visible: false, width: 10, height: 10, shape: 'Circle' }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={Cluster2Value} xName='Breadth' yName='Circumference' name='21-25 Years' type='Scatter' marker={{ visible: false, width: 10, height: 10, shape: 'Circle' }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={Cluster3Value} xName='Breadth' yName='Circumference' name='26-30 Years' type='Scatter' marker={{ visible: false, width: 10, height: 10, shape: 'Circle' }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={Cluster4Value} xName='Breadth' yName='Circumference' name='31-35 years' type='Scatter' marker={{ visible: false, width: 10, height: 10, shape: 'Circle' }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={Cluster5Value} xName='Breadth' yName='Circumference' name='36+ Years' type='Scatter' marker={{ visible: false, width: 10, height: 10, shape: 'Circle' }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </ChartContainer>
            </MainContainer>
        </Container>
    )
}

export default Bubble