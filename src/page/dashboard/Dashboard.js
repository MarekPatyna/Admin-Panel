import React from "react"
import {
  Container,
  DashboardContainer,
} from "../../styles/dashboard/Dashboard-styled"
import DBTopContainer from "../../components/dashboard/TopCon"
import DBMidContainer from "../../components/dashboard/MidCon"
import DBBottomContainer from "../../components/dashboard/BottomCon"

const Dashboard = () => {

    return (
        <Container>
            <DashboardContainer>
                <DBTopContainer />
                <DBMidContainer />
                <DBBottomContainer />
            </DashboardContainer>
        </Container>
    )
}
export default Dashboard