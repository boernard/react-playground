import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToDoList } from './components/ToDoList';
declare let module: any

ReactDOM.render(<ToDoList />,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
