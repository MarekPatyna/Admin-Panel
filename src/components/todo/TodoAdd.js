import React, { useState } from "react"
import {
  AddButton,
  AddContainer,
  AddContent,
  AddEditButtons,
  AddHeader,
  CloseIcon,
  DiscardButton,
  ShowAdd,
  ErrorMessage,
  InputTitle,
  InputDescription,
} from "../../styles/todo/Todo-styled"

const TodoAdd = ({setAddMenu, addMenu, setTodos, todos, error, setError}) => {

    const [todo, setTodo] = useState("")
    const [todoDes, setTodoDes] = useState("")


    const addTodo = (todo) => {
        const newTodo = {
            id: Math.floor(Math.random() * 10000),
            text: todo,
            text2: todoDes,
            completed: false
        }

        setTodos([...todos, newTodo])
        setAddMenu(!addMenu)
        setTodo("")
        setTodoDes("")
    }

    const validationTest = () => {
        if (todo.trim().length === 0) {
            setError(true)
        } else {
            addTodo(todo)
        }
    }

    return (
        <ShowAdd addMenu={addMenu}>
            <AddContainer name="TEST">
                <AddHeader>
                    <h1>Add Task</h1>
                    <CloseIcon onClick={() => setAddMenu(!addMenu)} />
                </AddHeader>
                <AddContent>

                    <InputTitle error={error}>
                        <h2>Title</h2>
                        <input
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            placeholder="Title"
                        />
                        {error && <ErrorMessage>Title is required</ErrorMessage>}
                    </InputTitle>
                    <InputDescription>
                        <h3>Description</h3>
                        <textarea
                            value={todoDes}
                            onChange={(e) => setTodoDes(e.target.value)}
                            placeholder="Insert content here..."
                        />
                    </InputDescription>

                </AddContent>
                <AddEditButtons>
                    <DiscardButton onClick={() => setAddMenu(!addMenu)}>
                        Discard
                    </DiscardButton>
                    <AddButton onClick={validationTest}>
                        Add
                    </AddButton>
                </AddEditButtons>
            </AddContainer>
        </ShowAdd>
    )
}

export default TodoAdd