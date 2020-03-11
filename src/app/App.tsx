import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToDoListApp } from './components/ToDoList';
declare let module: any

ReactDOM.render(<ToDoListApp />,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
