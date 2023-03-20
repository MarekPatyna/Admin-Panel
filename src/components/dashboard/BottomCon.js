import React from "react"
import {
  BarContainer,
  BottomContainer,
  DoneWidget,
  EmptyDot,
  Line,
  MdStar,
  OpinionBar,
  OpinionContainer,
  OpinionScore,
  Performance,
  ReviewWidget,
  RiTodo,
} from "../../styles/dashboard/Dashboard-styled"
import ProgressSegments from "../syncfusion/ProgressSegments"


const BottomCon = () => {
    return (
        <BottomContainer>
            <ReviewWidget>
                <OpinionContainer>
                    <li>
                        <h1>Customer Satisfaction</h1>
                    </li>
                    <li>
                        <div>
                            <EmptyDot />
                            <span>Exellent</span>
                        </div>
                        <p>1029</p>
                    </li>
                    <li>
                        <div>
                            <EmptyDot Black/>
                            <span>Very Good</span>
                        </div>
                        <p>700</p>
                    </li>
                    <li>
                        <div>
                            <EmptyDot Blue/>
                            <span>Good</span>
                        </div>
                        <p>500</p>
                    </li>
                    <li>
                        <div>
                            <EmptyDot Pink/>
                            <span>Poor</span>
                        </div>
                        <p>323</p>
                    </li>
                    <li>
                        <div>
                            <EmptyDot Orange/>
                            <span>Very Poor</span>
                        </div>
                        <p>99</p>
                    </li>
                </OpinionContainer>
                <OpinionBar>
                    <OpinionScore>
                        <h3>9.7</h3>
                        <p>+2.1%</p>
                    </OpinionScore>
                    <Performance>
                        Performance score
                    </Performance>
                    <BarContainer>
                        <Line></Line>
                        <Line Black></Line>
                        <Line Blue></Line>
                        <Line Pink></Line>
                        <Line Orange></Line>
                    </BarContainer>
                </OpinionBar>
                <MdStar />
            </ReviewWidget>
            <DoneWidget>
                <div>
                    <h4>Todo</h4>
                    <RiTodo />
                </div>
                <ProgressSegments />
            </DoneWidget>
        </BottomContainer>
    )
}

export default BottomCon