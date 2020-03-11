import * as React from 'react';
import { useState, useEffect } from 'react';
import { utils } from '../utils/utils'

interface IProps {
  compiler: string,
  framework: string,
  bundler: string
}

const processInput = () => {
  const [toDoList, setToDoList] = useState([])
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
  const [isChecked, setIsChecked] = useState([])

  return (
    <>
      <ToDoInput setInput={setInput} input={input} setIsSubmitting={setIsSubmitting} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </>
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

export const ToDoList = (props) => {


  const handleCheckboxChange = (event) => {
    const changedItem = event.target.name
    const curToDoList = props.toDoList
    curToDoList[changedItem].isChecked = !curToDoList[changedItem].isChecked
    props.setToDoList(curToDoList)
  }
  return (
    <div className='todo'>
      {console.log("To Do list render")}
      {props.toDoList.map((item, i) => {
        if (item.isChecked === false) {
          return (
            <li>
              {console.log("Item render")}
              <input
                type="checkbox"
                defaultChecked={item.isChecked}
                onChange={event => handleCheckboxChange(event)}
                name={i}
                key={i} />
              <label>{item.value}</label>
            </li>
          )
        }
      }
      )}
    </div>
  )
}