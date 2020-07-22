import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrandSearch } from './components/FilterView'
import { BrandSession } from './components/brandSession'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
declare let module: any

// prettier-ignore
ReactDOM.render(
    <Router basename="/" >
        <Switch>
            <Route path='/brandsession'><BrandSession /></Route>
            <Route path='/brandsearch'><BrandSearch /></Route>
            <Route component={BrandSearch} />
        </Switch>
    </Router>,
   
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}
