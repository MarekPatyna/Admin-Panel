import React, { useEffect, useState } from "react"
import {
    BottomSpace,
    Container,
    InboxStack,
    MainContainer,
    SidebarButton,
    SidebarContainer,
    SidebarInbox,
    TodoFill, TodoHeader,
    TodoSidebar,
} from "../../styles/todo/Todo-styled"
import { Scrollbars } from "react-custom-scrollbars-2"
import TodoEdit from "../../components/todo/TodoEdit"
import TodoAdd from "../../components/todo/TodoAdd"
import { initialTodos } from "../../data/mockData"

const Todo = () => {

    const [todos, setTodos] = useState(initialTodos)
    const [addMenu, setAddMenu] = useState(false)
    const [error, setError] = useState(false)
    const [query, setQuery] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setError(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [error])

    return (
        <Container>
            <MainContainer>
                <TodoSidebar>
                    <h1>Todo List<TodoFill /></h1>
                    <SidebarContainer>
                        <SidebarInbox>
                            <span><InboxStack />Inbox</span>
                            <p>{todos.length}</p>
                        </SidebarInbox>
                        <SidebarButton onClick={() => setAddMenu(!addMenu)}>ADD TASK</SidebarButton>
                    </SidebarContainer>
                    <TodoAdd
                        addMenu={addMenu}
                        setAddMenu={setAddMenu}
                        todos={todos}
                        setTodos={setTodos}
                        error={error}
                        setError={setError}
                    />
                </TodoSidebar>
                <Scrollbars>
                    <TodoHeader>
                        <input
                            type="text"
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search Here..."
                        />
                    </TodoHeader>
                    <TodoEdit
                        todos={todos}
                        setTodos={setTodos}
                        error={error}
                        setError={setError}
                        query={query}
                    />
                    <BottomSpace />
                </Scrollbars>
            </MainContainer>
        </Container>
    )
}

export default Todo