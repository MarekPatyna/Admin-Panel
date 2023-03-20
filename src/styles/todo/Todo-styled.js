import styled from "styled-components"
import { RiTodoFill } from 'react-icons/ri'
import { HiOutlineInboxStack } from 'react-icons/hi2'
import { IoMdClose } from "react-icons/io"
import { MdDelete, MdEdit } from "react-icons/md"

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
  color: #5b6e88;
  
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5.625rem 1.125rem 1.125rem 16.5625rem;
  background-color: white;
  border-radius: 0.4375rem;
  border: 0.0625rem solid #e0e0e0;
  width: 100%;
`

export const TodoSidebar = styled.div`
  position: relative;
  border-right: 0.0625rem solid #e0e0e0;
  width: 15.625rem;
  height: 100%;
  h1 {
    text-align: center;
    margin-top: 1.5625rem;
    font-size: 1.5625rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  
`

export const SidebarContainer = styled.div`
  margin-top: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: column;
`

export const SidebarInbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #006d84;
  color: white;
  padding: 1.25rem;
  width: 90%;
  border-top-right-radius: 2.1875rem;
  border-bottom-right-radius: 2.1875rem;
  font-size: 1.25rem;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  p {
    
  }
`

export const SidebarButton = styled.button`
  width: 7.875rem;
  padding: 0.625rem 0 0.625rem 0;
  text-align: center;
  border-radius: 0.9375rem;
  background-color: #006d84;
  color: white;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 1.25rem;
  left: 0;
  right: 0;
`

export const TodoFill = styled(RiTodoFill)`
  font-size: 1rem;
`
export const InboxStack = styled(HiOutlineInboxStack)`
  font-size: 1.5625rem;
`

export const ShowAdd = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: ${(props) => props.addMenu ? "flex" : "none" };
  justify-content: center;
  align-items: center;
  z-index: 990;
  background-color: rgb(168, 169, 178, 0.4);
`

export const AddContainer = styled.div`
  width: 31.25rem;
  height: 38.75rem;
  background-color: white;
  border-radius: 0.9375rem;
`

export const AddHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #064663;
  padding: 1.25rem 1.5625rem;
  h1 {
    font-size: 1.375rem;
    font-weight: 700;
    margin-top: 0;
  }
`

export const AddContent = styled.div`
  height: 75%;
  padding: 1.25rem 1.5625rem;
`

export const InputTitle = styled.div`
  position: relative;
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  input {
    background-color: white;
    width: 100%;
    padding: 0.9375rem;
    border-radius: 0.9375rem;
    color: gray;
    margin-top: 0.625rem;
    border: 0.0625rem solid ${props => props.error ? "#D0342C" : "#006D84"};
    &::placeholder {
      font-style: italic;
      color: ${props => props.error ? "#D0342C" : "gray"}
    }
  }
`

export const InputDescription = styled.div`
  height: 70%;
  margin-top: 1.5625rem;
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  textarea {
    margin-top: 0.625rem;
    border: 0.0625rem solid #006d84;
    border-radius: 0.9375rem;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0.9375rem;
    overflow-wrap: break-word;
    &::placeholder {
      font-style: italic;
    }
  }
`

export const AddEditButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.25rem 1.5625rem;
  font-size: 1.1875rem;
`

export const DiscardButton = styled.button`
  padding: 0.625rem 1.875rem;
  border-radius: 0.9375rem;
  background-color: #006D84;
  margin-right: 0.3125rem;
  color: white;
`

export const AddButton = styled.button`
  background-color: royalblue;
  padding: 0.625rem 1.5625rem;
  border-radius: 0.9375rem;
  color: white;
`

export const CloseIcon = styled(IoMdClose)`
  font-size: 1.5625rem;
`

export const TodoHeader = styled.div`
  height: 1.875rem;
  width: 100%;
  padding: 1.5625rem;
  border-bottom: 0.0625rem solid #E0E6ED;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: gray;
  input {
    width: 100%;
  }
`

export const TodoContainer = styled.section`
  position: relative;
  padding: 1.5625rem 0.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #e0e0e0;
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 0fr 6fr 0fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas: 
              "input h1 ."
              ". h2 ."
              ". . .";
  input[type="checkbox"] {
    display:inline-block;
    width: 1.5625rem;
    height: 1.1875rem;
    margin-right: 0.625rem;
    margin-left: 1.5625rem;
    &:before, &:after {
      transition: all .3s ease-in-out;
      content: "";
      position: absolute;
      z-index: 1;
      width: 1.2rem;
      height: 1.2rem;
      background: transparent;
      border: 0.125rem solid #006d84;
      margin-top: 0.4375rem;
    }
    &:checked {
      &:before {
        transform: rotateY(180deg);
        background: #006d84;
      }
    }
`

export const TodoText = styled.div`
  text-decoration: ${(props) => props.completed ? 'line-through' : ""};
  div {
    font-size: 1.5625rem;
    grid-area: h1;
  }
  
  p {
    grid-area: h2;
    overflow: hidden;
    max-width: 130ch;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.9375rem;
    margin-top: 0.9375rem;
    @media(max-width: 1700px) {
      max-width: 100ch;
    }
    @media(max-width: 1450px) {
      max-width: 70ch;
    }
    @media(max-width: 1200px) {
      max-width: 40ch;
    }
  }
  
`

export const TodoButtons = styled.div`
  display: flex;
  padding-right: 1.5625rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`



export const ShowEdit = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 990;
  background-color: rgb(168, 169, 178, 0.4);
  
`

export const EditContainer = styled.div`
  width: 31.25rem;
  height: 38.75rem;
  background-color: white;
  border-radius: 0.9375rem;
`

export const EditHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #064663;
  padding: 1.25rem 1.5625rem;
  h1 {
    font-size: 1.375rem;
    font-weight: 700;
  }
`

export const EditContent = styled.div`
  height: 75%;
  padding: 1.25rem 1.5625rem;
`

export const ShowMenu = styled.section`
  background-color: rgb(168, 169, 178, 0.4);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 990;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`


export const ShowContainer = styled.div`
  width: 34.375rem;
  height: 26.25rem;
  background-color: #006D84;
  border-radius: 0.9375rem;
  overflow-y: auto;
`

export const ShowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #e0e0e0;
  padding: 1.25rem 1.5625rem;
  p {
    font-size: 1.375rem;
    font-weight: 700;
    overflow-wrap: break-word;
  }
`

export const ShowDescription = styled.div`
  padding: 1.25rem 1.5625rem;
  p {
    line-height: 1.5;
    letter-spacing: 0.075rem;
  }
`


export const BottomSpace = styled.div`
  height: 1.875rem;
  width: 100%;
  margin-top: 1.5625rem;
`

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  font-weight: 800;
  bottom: -1.375rem;
  text-align: center;
  color: #D0342C;
  z-index: 1003;
`

export const EditButton = styled(MdEdit)`
  font-size: 1.5625rem;
  color: #5b6e88;
`

export const DeleteButton = styled(MdDelete)`
  font-size: 1.5625rem;
  color: #5b6e88;
`