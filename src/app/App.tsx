import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ToDoListApp } from './components/ToDoList'
import { BrandSearch } from './components/FilterView'
declare let module: any

ReactDOM.render(<BrandSearch />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}
