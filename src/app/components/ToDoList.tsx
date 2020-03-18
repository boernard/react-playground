import * as React from 'react';
import { useState, useEffect } from 'react';
import './ToDoList.css';


type IToDoListItem = {
  value: string,
  isChecked: boolean
}

const processInput = () => {
  const [toDoList, setToDoList] = useState<IToDoListItem[]>([])
  const [input, setInput] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    if (isSubmitting === true) {
      if (input !== '') {
        setToDoList([...toDoList, { value: input, isChecked: false }])
        setInput('')
      } else {
        console.log('Empty input')
      }
    }
    setIsSubmitting(false)
  })

  return { toDoList, setToDoList, input, setInput, isSubmitting, setIsSubmitting }
}



export const ToDoListApp = () => {
  const { toDoList, setToDoList, input, setInput, isSubmitting, setIsSubmitting } = processInput()

  return (
    <div className="ToDoListComponent">
      <ToDoInput setInput={setInput} input={input} setIsSubmitting={setIsSubmitting} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      <hr />
      <DoneList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  )
};


export const ToDoInput = (props) => {
  const setInput = props.setInput
  const input = props.input
  const setIsSubmitting = props.setIsSubmitting

  return (
    <div className='container'>
      <form>
        <input
          type='text'
          name='toDo'
          value={input}
          onChange={event => {
            setInput(event.currentTarget.value)
          }}
        ></input>
        <button className='addToList' onClick={event => {
          event.preventDefault()
          setIsSubmitting(true)
        }}>Add</button>
      </form>
    </div>
  )
}

const changeCheckedState = (event, state, setter) => {
  const changedItem = event.target.name
  const curToDoList = [...state]
  curToDoList[changedItem].isChecked = !curToDoList[changedItem].isChecked
  setter(curToDoList)
}

export const ToDoList = (props) => {

  const handleCheckboxChange = (event) => {
    changeCheckedState(event, props.toDoList, props.setToDoList)
  }

  return (
    <div className='todo'>
      {console.log("To Do list render")}
      {props.toDoList.map((item, i) => {
        if (item.isChecked === false) {
          return (
            <li key={i}>
              {console.log("Item renderer")}
              <input
                type="checkbox"
                defaultChecked={props.toDoList[i].isChecked}
                onChange={event => handleCheckboxChange(event)}
                name={i}
              />
              <label>{props.toDoList[i].value}</label>
            </li>
          )
        }
      }
      )}
    </div>
  )
}

export const DoneList = (props) => {
  const handleCheckboxChange = (event) => {
    changeCheckedState(event, props.toDoList, props.setToDoList)
  }

  return (
    <div className='done'>
      {props.toDoList.map((item, i) => {
        if (item.isChecked === true) {
          return (
            <li key={i}>
              {console.log("Item renderer")}
              <input
                type="checkbox"
                defaultChecked={props.toDoList[i].isChecked}
                onChange={event => handleCheckboxChange(event)}
                name={i}
              />
              <label>{props.toDoList[i].value}</label>
            </li>
          )
        }
      })}
    </div>

  )
}