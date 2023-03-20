import React from "react"
import {
  BChart,
  MidContainer,
  PChart,
} from "../../styles/dashboard/Dashboard-styled"
import BarChart from "../syncfusion/BarChart"
import PyramidChart from "../syncfusion/PyramidChart"

const MidCon = () => {
    return (
        <MidContainer>
            <BChart>
                <span>
                    <BarChart />
                </span>
            </BChart>
            <PChart>
                <PyramidChart />
            </PChart>
        </MidContainer>
    )
}

export default MidCon