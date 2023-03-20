import styled from "styled-components"
import { AiFillHome } from "react-icons/ai"
import { RiTeamFill, RiTodoFill } from "react-icons/ri"
import { FaFileInvoiceDollar, FaClipboardList } from "react-icons/fa"
import { BsBarChartFill } from "react-icons/bs"
import { IoCalendarNumberSharp } from "react-icons/io5"
import {
  MdAreaChart,
  MdOutlineStackedLineChart,
  MdAutoAwesomeMosaic,
  MdPictureAsPdf,
  MdShoppingCart,
  MdBubbleChart,
} from "react-icons/md"
import { NavLink } from "react-router-dom"
import avatar from "../../assets/img/avatar.webp"

export const Container = styled.div`
  background-color: #ffffff;
  width: 15.625rem;
  height: 100vh;
  border-right: 0.0625rem solid #e0e0e0;
  position: fixed;
  left: 0;
  z-index: 955;
  overflow-y: auto;
  color: #5b6e88;
`

export const SidebarContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 1.25rem 0;
`

export const AdminLogo = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  div {
    width: 6.25rem;
    height: 6.5625rem;
    border-radius: 50%;
    background-image: url(${avatar});
  }
  h1 {
    font-size: 1.5625rem;
    font-weight: 900;
    color: #5b6e88;
  }
  p {
    font-weight: 400;
    color: #5b6e88;
  }
`

export const SidebarContent = styled.section`
  font-weight: 400;
  ul {
    margin-top: 1.25rem;
    li {
      span {
        padding: 0.3125rem;
        font-size: 1.25rem;
        font-weight: 600;
        color: #5b6e88;
      }
    }
  }
`

export const StyledNavLink = styled(NavLink)`
  &[aria-current] {
    color: #006d84;
  }
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.125rem;
    transition: .9s;
    p {
      margin-left: 0.625rem;

    }
  }
`

export const DashboardIcon = styled(AiFillHome)`
    font-size: 1.5625rem;
`

export const ManageIcon = styled(RiTeamFill)`
    font-size: 1.5625rem;
`

export const OrdersIcon = styled(MdShoppingCart)`
    font-size: 1.5625rem;
`

export const ProductsIcon = styled(FaClipboardList)`
    font-size: 1.5625rem;
`

export const InvoicesIcon = styled(FaFileInvoiceDollar)`
    font-size: 1.5625rem;
`

export const PdfIcon = styled(MdPictureAsPdf)`
    font-size: 1.5625rem;
`

export const TodoIcon = styled(RiTodoFill)`
    font-size: 1.5625rem;
`

export const NotesIcon = styled(MdAutoAwesomeMosaic)`
    font-size: 1.5625rem;
`

export const Calendar = styled(IoCalendarNumberSharp)`
    font-size: 1.5625rem;
`

export const BarIcon = styled(BsBarChartFill)`
    font-size: 1.5625rem;
`

export const BubbleIcon = styled(MdBubbleChart)`
    font-size: 1.5625rem;
`

export const AreaIcon = styled(MdAreaChart)`
    font-size: 1.5625rem;
`

export const LineIcon = styled(MdOutlineStackedLineChart)`
    font-size: 1.5625rem;
`

