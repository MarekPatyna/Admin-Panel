import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative; 
  color: #5b6e88;
`

export const InvoicesContainer = styled.section`
  margin: 5.625rem 1.125rem 1.125rem 16.5625rem;
  overflow: hidden;
  .e-pivotview {
    width: 100%;
    height: 100%;
  }
  .e-grid.e-default .e-gridheader th.e-firstcell.e-movablefirst {
    border-left-width: 0;
    padding-top: 0.6875rem;
  }
`