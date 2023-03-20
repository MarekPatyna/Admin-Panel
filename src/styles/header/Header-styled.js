import styled from "styled-components"
import { AiFillMessage } from "react-icons/ai"
import { IoIosNotifications } from 'react-icons/io'

export const Container = styled.div`
  width: 100%; 
  position: fixed; 
  top: 0;
  background-color: #FEFEFF;
  border-bottom: 0.0625rem solid #e0e0e0;
  z-index: 954;
`

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  gap: 2rem;
  padding: 0.8125rem;
  position: relative;
`

export const HeaderItems = styled.div`
  padding: 0.625rem;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const HeaderIcons = styled.div`
  margin-left: 1.5625rem;
  color: #5b6e88;
  position: relative;
  cursor: pointer;
  span {
    position: absolute;
    top: -0.4375rem;
    right: -0.3125rem;
    background-color: red;
    border-radius: 50%;
    width: 0.625rem;
    height: 0.625rem;
  }
  div {
    position: absolute;
    top: -0.4375rem;
    right: 0;
    background-color: red;
    border-radius: 50%;
    width: 0.625rem;
    height: 0.625rem;
  }
`

export const MessageIcon = styled(AiFillMessage)`
  font-size: 1.5625rem;
`
export const NotificationIcon = styled(IoIosNotifications)`
  font-size: 1.5625rem;
  
`