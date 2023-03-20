import React, { useState } from "react"
import {
  AddButton,
  AddEditButtons,
  CloseIcon,
  DeleteButton,
  DiscardButton,
  EditButton,
  EditContainer,
  EditContent,
  EditHeader,
  ErrorMessage,
  InputDescription,
  InputTitle,
  ListContainer,
  ShowContainer,
  ShowDescription,
  ShowEdit,
  ShowHeader,
  ShowMenu,
  TodoButtons,
  TodoContainer,
  TodoText,
} from "../../styles/todo/Todo-styled"

const TodoEdit = ({todos, setTodos, error, setError, query}) => {

    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState("")
    const [editingTextDes, setEditingTextDes] = useState("")
    const [showTodo, setShowTodo] = useState(null)

    const deleteTodo = (id) => {
        const deletedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(deletedTodos)
    }

    const editTodo = (id) => {
        const updatedTodos = [...todos].map((todo) => {
            if (editingText.trim().length === 0 ) {
                setError(true)
            } else if (todo.id === id) {
                todo.text = editingText
                todo.text2 = editingTextDes
                setTodoEditing(null)
                setEditingText("")
                setEditingTextDes("")
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const completeTodo = (id) => {
        const completedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(completedTodos)
    }

    return (
        <>
            {todos
                .filter((todo) => {
                    return todo.text.toLowerCase().includes(query) || todo.text.toUpperCase().includes(query)
                })
                .map((todo) => {
                    return <div key={todo.id}>
                        <TodoContainer>
                            <ListContainer>
                                <input
                                    type="checkbox"
                                    onChange={() => completeTodo(todo.id)}
                                    checked={todo.completed}
                                />
                                <TodoText completed={todo.completed} onClick={() => setShowTodo(todo.id)}>
                                    <div>{todo.text}</div>
                                    <p>{todo.text2}</p>
                                </TodoText>
                            </ListContainer>
                            <TodoButtons>
                                <EditButton onClick={() => {
                                    setTodoEditing(todo.id)
                                    setEditingText(todo.text)
                                    setEditingTextDes(todo.text2)
                                }}/>
                                <DeleteButton onClick={() => deleteTodo(todo.id)} />
                            </TodoButtons>
                        </TodoContainer>

                        {todoEditing === todo.id
                            &&
                            <ShowEdit>
                                <EditContainer>
                                    <EditHeader>
                                        <h1>Edit Task</h1>
                                        <CloseIcon onClick={() => setTodoEditing(null)} />
                                    </EditHeader>
                                    <EditContent>
                                        <InputTitle error={error}>
                                            <h2>Title</h2>
                                            <input
                                                defaultValue={todo.text}
                                                onChange={(e) => setEditingText(e.target.value)}
                                                placeholder="Title"
                                            />
                                            {error && <ErrorMessage>Title is required</ErrorMessage>}
                                        </InputTitle>
                                        <InputDescription>
                                            <h3>Description</h3>
                                            <textarea
                                                defaultValue={todo.text2}
                                                onChange={(e) => setEditingTextDes(e.target.value)}
                                                placeholder="Insert content here..."
                                            />
                                        </InputDescription>
                                    </EditContent>
                                    <AddEditButtons>
                                        <DiscardButton onClick={() => setTodoEditing(null)}>Discard</DiscardButton>
                                        <AddButton
                                            onClick={() => editTodo(todo.id)}>
                                            Submit Edits
                                        </AddButton>
                                    </AddEditButtons>
                                </EditContainer>
                            </ShowEdit>
                        }

                        {showTodo === todo.id
                            &&
                            <ShowMenu>
                                <ShowContainer>
                                    <ShowHeader>
                                        <p>{todo.text}</p>
                                        <CloseIcon onClick={() => setShowTodo(null)} />
                                    </ShowHeader>
                                    <ShowDescription>
                                        <p>{todo.text2}</p>
                                    </ShowDescription>
                                </ShowContainer>
                            </ShowMenu>
                        }
                    </div>
                })
            }
        </>
    )
}

export default TodoEdit