import React from "react"
import Sidebar from "./page/sidebar/Sidebar"
import Header from "./page/header/Header"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import ManageTeam from "./page/team/ManageTeam"
import Dashboard from "./page/dashboard/Dashboard"
import ProductList from "./page/products/ProductList"
import Todo from "./page/todo/Todo"
import Calendar from "./page/calendar/Calendar"
import Editor from "./page/editor/Editor"
import PdfViewer from "./page/pdfviewer/PdfViewer"
import Balances from "./page/invoices/Balances"
import Bar from "./page/bar/Bar"
import Bubble from "./page/bubble/Bubble"
import Area from "./page/area/Area"
import Line from "./page/line/Line"
import LastOrders from "./page/orders/LastOrders"
import { GlobalStyles } from "./styles/styled/Global"

const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <Sidebar />
            <Header />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/ManageTeam' element={<ManageTeam />} />
                <Route path='/LastOrders' element={<LastOrders />} />
                <Route path='/ProductList' element={<ProductList />} />
                <Route path='/Balances' element={<Balances />} />
                <Route path='/PdfViewer' element={<PdfViewer />} />
                <Route path='/Todo' element={<Todo />} />
                <Route path='/Editor' element={<Editor />} />
                <Route path='/Calendar' element={<Calendar />} />
                <Route path='/Bar' element={<Bar />} />
                <Route path='/Bubble' element={<Bubble />} />
                <Route path='/Area' element={<Area />} />
                <Route path='/Line' element={<Line />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </Router>

    )
}

export default App