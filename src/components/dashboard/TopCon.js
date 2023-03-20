import React from "react"
import {
  Balance,
  BalanceContainer,
  CgArrow,
  FaBill,
  Icons,
  LChart,
  MdAdd,
  MdBalance,
  MdEye,
  ProBar,
  TopContainer,
  TopWidget,
  TopWidgetDes,
  TopWidgetHeader,
} from "../../styles/dashboard/Dashboard-styled"
import VisitsChart from "../syncfusion/VisitsChart"
import ProgressBar from "../syncfusion/ProgressBar"

const TopCon = () => {
    return (
        <TopContainer>
            <TopWidget>
                <TopWidgetHeader>
                    <h1>Total Visits</h1>
                    <MdEye />
                </TopWidgetHeader>
                <TopWidgetDes>
                    <h2>423,423</h2>
                    <p>this year</p>
                    <CgArrow />
                </TopWidgetDes>
                <LChart>
                    <VisitsChart />
                </LChart>
            </TopWidget>
            <TopWidget>
                <TopWidgetHeader>
                    <h1>Expenses</h1>
                    <FaBill />
                </TopWidgetHeader>
                <TopWidgetDes>
                    <h2>$ 45,442</h2>
                    <p>this month</p>
                    <CgArrow />
                </TopWidgetDes>
                <ProBar>
                    <ProgressBar />
                </ProBar>
            </TopWidget>
            <TopWidget Balance>
                <BalanceContainer>
                    <TopWidgetHeader>
                        <h1>Total Balance</h1>
                        <Balance>
                            <h2>$ 9,425,523</h2>
                            <p>+ 5235</p>
                        </Balance>
                    </TopWidgetHeader>
                    <Icons>
                        <div>
                            <MdAdd />
                            <MdBalance />
                        </div>
                        <button>
                            Upgrade
                        </button>
                    </Icons>
                </BalanceContainer>
            </TopWidget>
        </TopContainer>
    )
}

export default TopCon