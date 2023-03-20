import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
  color: #5b6e88;
`

export const DataTablesContainer = styled.section`
  margin: 5.625rem 1.125rem 1.125rem 16.5625rem;
  .e-gridheader {
    padding-top: 1.5625rem;

    .e-headercontent {
      border-right: none;
      .e-headercell {
        .e-headertext {
          text-transform: uppercase;
          font-weight: 800;
          color: black;
        }
      }
    }
  }

  .e-pager .e-currentitem, .e-pager .e-currentitem:hover {
    background: #04293a !important;
    color: #fff;
    opacity: 1;
  }


  .e-input-group::after {
    background-color: #04293a !important;
  }

  .e-input-group::before {
    background-color: #04293a !important;
  }

  .e-btn {
    color: #04293a !important;
  }

  .e-btn.e-flat:focus {
    background-color: rgba(0, 0, 0, 0.1044);
    border-color: transparent;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
  }

  .e-ddl.e-popup.e-lib.e-control.e-popup-open {
    color: blue !important;
  }
`
