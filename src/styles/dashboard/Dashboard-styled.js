import styled, { css } from 'styled-components'
import cardbg from '../../assets/img/cardbg.webp'
import { MdOutlineVisibility, MdOutlineStarRate, MdAddBox, MdAccountBalanceWallet } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { CgArrowTopRight } from 'react-icons/cg'
import { RiTodoLine } from 'react-icons/ri'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
  color: #5b6e88;
  
`

export const DashboardContainer = styled.section`
  width: 100%;
  margin: 5.625rem 1.125rem 1.125rem 16.5625rem;
`

export const TopContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  gap: 1rem;
  @media(max-width: 1250px) {
    flex-flow: column;
  }
`

export const TopWidget = styled.article`
  background-color: white;
  width: 100%; 
  height: 14.0625rem;  
  border: 0.0625rem solid #e0e0e0;
  padding: 0.9375rem;
  border-radius: 0.625rem;
  
  ${props => props.Balance && css`
    background-image: url(${cardbg});
    background-size: cover;
    color: white;
  `}
`

export const TopWidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  h1 {
    font-size: 1.4375rem;
    font-weight: 700;
  }

`

export const Balance = styled.article`
  position: relative;
  h2 {
    font-size: 1.4375rem;
  }
  p {
    font-size: 1rem;
    background: rgb(224, 230, 237, 0.25);
    border-radius: 0.625rem;
    width: 60%;
    text-align: center;
    position: absolute;
    top: 1.875rem;
    right: 0;
  }
`

export const TopWidgetDes = styled.article`
  display: flex;
  align-items: flex-end;
  flex-flow: row;
  margin-top: 1rem;
  h2 {
    font-size: 2.1875rem;
  }
  p {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0.375rem 1rem;
  }
  
`

export const LChart = styled.div`
  height: 6.25rem;
  width: 100%;
  padding-right: 2.8125rem;
  margin-top: 2.1875rem;
  @media (max-width: 1250px) {
    margin-top: 1.25rem;
  }
  #chlinedb_chart_legend_g {
    display: none;
  }
  #chlinedbAxisInsideCollection {
    display: none;
  }
  #chlinedb_ChartAreaBorder {
    display: none;
  }
`

export const ProBar = styled.div`
  margin-top: 4.3125rem;
  
`

export const BalanceContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8.2rem;
`

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  button {
    border: 0.125rem solid #5b6e88;
    padding: 0.1875rem 0.625rem;
    border-radius: 0.625rem;
    transition: .9s;
    &:hover {
      background: whitesmoke;
      border: 0.125rem solid whitesmoke;
      cursor: pointer;
      color: #5b6e88;
    }
  }
`

export const MidContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
  @media(max-width: 1250px) {
    flex-flow: column;
  }
`

export const BChart = styled.div`
  background: white;
  width: 62%;
  border: 0.0625rem solid #e0e0e0;
  height: 21.6875rem;
  border-radius: 0.625rem;
  padding: 0.9375rem 0.9375rem 0 0.9375rem;
  span {
    height: 100%;
  }
  @media(max-width: 1250px) {
    width: 100%;
  }
  @media(min-height: 960px) {
    height: 23.5625rem;
  }
  #chline_ChartTitle {
    font-size: 1.4375rem !important;
    font-family: 'Source Sans Pro', sans-serif !important;
    font-weight: 600 !important;
  }
`

export const PChart = styled.div`
  background: white;
  width: 38%;
  height: 21.6875rem;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 0.625rem;
  padding: 0.9375rem;
  @media(max-width: 1250px) {
    width: 100%;
  }
  @media(min-height: 960px) {
    height: 23.5625rem;
  }
  #charts_title {
    font-size: 1.4375rem !important;
    font-family: 'Source Sans Pro', sans-serif !important;
    font-weight: 600 !important;
  }
`

export const BottomContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media(max-width: 1500px) {
    flex-flow: column;
    padding-bottom: 0.9375rem;
  }
`
export const ReviewWidget = styled.section`
  background-color: white;
  width: 70%;
  height: 14.0625rem;
  border: 0.0625rem solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  border-radius: 0.625rem;
  padding: 0.9375rem;
  @media(max-width: 1500px) {
    width: 100%;
  }
`

export const OpinionContainer = styled.ul`
  min-width: 13.625rem;
  li {
    display: flex;
    justify-content: space-between;
    flex-flow: row;
    align-items: center;
    margin-top: 0.625rem;
    font-weight: 600;
    h1 {
      font-size: 1.4375rem;
      font-weight: 700;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`

export const EmptyDot = styled.div`
  border-radius: 50%;
  height: 0.9375rem;
  width: 0.9375rem;
  border: 0.125rem solid #7FDED6;
  ${props => props.Black && css`
    border: 0.125rem solid #404041;
  `}
  ${props => props.Blue && css`
    border: 0.125rem solid #357CD2;
  `}
  ${props => props.Pink && css`
    border: 0.125rem solid #E56590;
  `}
  ${props => props.Orange && css`
    border: 0.125rem solid #F8B883;
  `}
`

export const OpinionBar = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 1.5rem;
`

export const OpinionScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 2.1875rem;
  }
  p {
    font-size: 0.875rem;
    color: green;
    font-weight: 600;
  }
`

export const Performance = styled.div`
  font-weight: 600;
`

export const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  
`

export const Line = styled.div`
  content: '';
  height: 0.625rem;
  width: 9.6875rem;
  background: #7FDED6;
  margin-right: 0.25rem;
  border-radius: 0.625rem;
  @media(max-width: 1200px) {
    width: 7.8125rem;
  }
  ${props => props.Black && css`
    background: #404041;
    width: 7.8125rem;
    @media(max-width: 1200px) {
      width: 5.625rem;
    }
  `}
  ${props => props.Blue && css`
    background: #357CD2;
    width: 6.25rem;
    @media(max-width: 1200px) {
      width: 4.0625rem;
    }
  `}
  ${props => props.Pink && css`
    background: #E56590;
    width: 4.6875rem;
    @media(max-width: 1200px) {
      width: 2.5rem;
    }
  `}
  ${props => props.Orange && css`
    background: #F8B883;
    width: 2.1875rem;
    margin-right: 0;
    @media(max-width: 1200px) {
      width: 0.9375rem;
    }
  `}
`

export const DoneWidget = styled.div`
  background-color: white;
  width: 30%;
  height: 14.0625rem;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 0.625rem;
  padding: 0.9375rem;
  @media(max-width: 1500px) {
    width: 100%;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h4 {
    font-size: 1.4375rem;
    font-weight: 700;
  }
`

/*REACT ICONS */

export const MdEye = styled(MdOutlineVisibility)`
  font-size: 1.4375rem;
  transition: .9s;
  &:hover {
    color: #006d84;
    cursor: pointer;
  }
`

export const CgArrow = styled(CgArrowTopRight)`
  color: green;
  margin-bottom: 0.625rem;
`

export const FaBill = styled(FaRegMoneyBillAlt)`
  font-size: 1.4375rem;
  transition: .9s;
  &:hover {
    color: #006d84;
    cursor: pointer;
  }
`

export const MdStar = styled(MdOutlineStarRate)`
  font-size: 1.4375rem;
  transition: .9s;
  &:hover {
    color: #006d84;
    cursor: pointer;
  }
`

export const RiTodo = styled(RiTodoLine)`
  font-size: 1.4375rem;
  transition: .9s;
  &:hover {
    color: #006d84;
    cursor: pointer;
  }
`

export const MdAdd = styled(MdAddBox)`
  font-size: 1.6875rem;
  transition: .9s;
  &:hover {
    cursor: pointer;
    color: #E5E4E2;
  }
`
export const MdBalance = styled(MdAccountBalanceWallet)`
  font-size: 1.6875rem;
  transition: .9s;
  &:hover {
    cursor: pointer;
    color: #E5E4E2;
  }
`