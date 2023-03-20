import React, { useRef } from "react"
import {
  CalendarContainer,
  Container,
} from "../../styles/calendar/Calendar-styled"
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ResourceDirective,
  ResourcesDirective,
} from "@syncfusion/ej2-react-schedule"
import { ownerData } from "../../assets/template/SyncTemplates"

const Calendar = () => {

    const scheduleRef = useRef(null)



    return (
        <Container>
            <CalendarContainer>
                <ScheduleComponent
                    height="100%"
                    allowMultiDrag={true}
                    ref={scheduleRef}
                >
                    <ResourcesDirective>
                        <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={ownerData} textField='OwnerText' idField='Id' colorField='OwnerColor'>
                        </ResourceDirective>
                    </ResourcesDirective>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
                </ScheduleComponent>
            </CalendarContainer>
        </Container>
    )
}

export default Calendar