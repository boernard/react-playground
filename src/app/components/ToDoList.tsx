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
                setToDoList([...toDoList, input])
                setInput('')
            } else {
                console.log('Empty input')
            }
        }
        setIsSubmitting(false)
    })


    return { toDoList, setToDoList, input, setInput, isSubmitting, setIsSubmitting }
}

export const ToDoList = () => {
    const { toDoList, setToDoList, input, setInput, isSubmitting, setIsSubmitting } = processInput()

    return (
        <div className='container'>
            <input
                type='text'
                name='toDo'
                value={input}
                onChange={event => {
                    setInput(event.currentTarget.value)
                }}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        setIsSubmitting(true)
                    }
                }}
            ></input>
            <button className='incrementor' onClick={event => setIsSubmitting(true)}>+</button>
            <div className="output">
                <ul>
                    {toDoList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        </div >

    );
};
