import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
  color: #5b6e88;
`

export const CalendarContainer = styled.section`
  margin: 5.625rem 1.125rem 1.125rem 16.5625rem;
  .e-past-app {
    background-color: red !important;
  }

  .e-schedule .e-schedule-toolbar .e-active-view .e-tbar-btn-text, .e-schedule .e-schedule-toolbar .e-active-view .e-icons {
    color: #04293a !important;
    font-weight: 600;
  }

  .e-schedule .e-vertical-view .e-header-cells.e-current-day {
    color: #064663;
    font-weight: 600;
  }

  .e-schedule .e-month-view .e-date-header-wrap table td.e-current-day, .e-schedule .e-month-agenda-view .e-date-header-wrap table td.e-current-day {
    color: #064663;
    font-weight: 600;
  }
  .e-schedule .e-month-view .e-current-date .e-date-header, .e-schedule .e-month-agenda-view .e-current-date .e-date-header {
    background-color: #064663;
    border-radius: 35%;
    color: #fff;
    width: 1.25rem;
  }
  .e-input-group::after {
    background-color: #04293a !important;
  }

  .e-input-group::before {
    background-color: #04293a !important;
  }

  .e-datetime-wrapper .e-input-group-icon.e-icons.e-active {
    color: #064663 !important;
  }
`

