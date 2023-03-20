import React from "react"
import {
  AdminLogo,
  AreaIcon,
  BarIcon,
  BubbleIcon,
  Calendar,
  Container,
  DashboardIcon,
  InvoicesIcon,
  LineIcon,
  ManageIcon,
  NotesIcon,
  OrdersIcon,
  PdfIcon,
  ProductsIcon,
  SidebarContainer,
  SidebarContent,
  StyledNavLink,
  TodoIcon,
} from "../../styles/sidebar/Sidebar-styled"
import { Scrollbars } from "react-custom-scrollbars-2"

const Sidebar = () => {

    return (
        <Container>
            <Scrollbars>
                <SidebarContainer>
                    <AdminLogo>
                        <div />
                        <h1>Marek Patyna</h1>
                        <p>VP Admin</p>
                    </AdminLogo>
                    <SidebarContent>
                        <ul>
                            <li>
                                <StyledNavLink to='/'>
                                    <div>
                                        <DashboardIcon /><p>Dashboard</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <span>Data Tables</span>
                                <StyledNavLink to='/ManageTeam'>
                                    <div>
                                        <ManageIcon /><p>Manage Team</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to='/LastOrders'>
                                    <div>
                                        <OrdersIcon /><p>Last Orders</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to='/ProductList'>
                                    <div>
                                        <ProductsIcon /><p>Product List</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to='/Balances'>
                                    <div>
                                        <InvoicesIcon /><p>Invoices Balances</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Apps</span>
                                <StyledNavLink to='/PdfViewer'>
                                    <div>
                                        <PdfIcon /><p>PDF Viewer</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to='/Todo'>
                                    <div>
                                        <TodoIcon /><p>Todo list</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to='/Editor'>
                                    <div>
                                        <NotesIcon /><p>Notes</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to='/Calendar'>
                                    <div>
                                        <Calendar /><p>Calendar</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Charts</span>
                                <StyledNavLink to='/Bar'>
                                    <div>
                                        <BarIcon /><p>Bar</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to='/Bubble'>
                                    <div>
                                        <BubbleIcon /><p>Bubble</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to='/Area'>
                                    <div>
                                        <AreaIcon /><p>Area</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to='/Line'>
                                    <div>
                                        <LineIcon /><p>Line</p>
                                    </div>
                                </StyledNavLink>
                            </li>
                        </ul>
                    </SidebarContent>
                </SidebarContainer>
            </Scrollbars>
        </Container>
    )
}

export default Sidebar