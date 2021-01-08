import React, { Component, useState } from 'react'
import { Container, FormContainer, TableContainer } from './styles'
import { Form as Fm, Jumbotron } from 'react-bootstrap'
import { Button, Table as Tb } from 'react-bootstrap'
import { Jumbo } from '../../components/Jumbotron/index'

const Form = ({ saveTodo }) => {
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(todo)
    setTodo('')
  }

  return (
    <>
      <Fm onSubmit={handleSubmit}>
        <h2>Add Todo</h2>
        <Fm.Group controlId="formTodo">
          <Fm.Control type="text" value={todo} onChange={e=>setTodo(e.target.value)} placeholder="Add todo here!" required/>
        </Fm.Group>
        <Button style={{backgroundColor: '#005fad'}} variant="primary" type="submit">
          Submit
        </Button>
      </Fm>
    </>
  )

}

export const Todo = () => {

    const [todos, setTodos] = useState([])

    const saveTodo = (text) => {
      setTodos([...todos, {text}]);
    }
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    const Todo = ({ todo, index}) => {
  
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
  
      return (
        <tr>
          <th>
            {todo.text}
          </th>
          <th style={{width: 50}}>
          <Button style={{backgroundColor: '#005fad'}} onClick={() => removeTodo(index)}>Delete</Button>
          </th>
        </tr>
      )
    
    }

    return (
        <div>

          <Jumbo name="Todo List"/>

          <Container>
            <TableContainer>
            <Tb striped border hover className="table-borderless">
                {todos.map((todo, index) => (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}/>
                ))}
            </Tb>
            </TableContainer>
          </Container>

          <Container>
            <FormContainer>
              <Form saveTodo={saveTodo}/>
            </FormContainer>
          </Container>
        </div>
    )

}