import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrandSearch } from './components/FilterView'
import { BrandSession } from './components/brandSession'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Agenda from './components/agenda'
import { ModalProvider, EventProvider } from './components/agenda/context'

declare let module: any

// prettier-ignore
ReactDOM.render(
    <Router basename="/" >
        <Switch>
            <Route path='/brandsession'><BrandSession /></Route>
            <Route path='/brandsearch'><BrandSearch /></Route>
            <Route path='/agenda'>
                <EventProvider>
                    <ModalProvider>
                        <Agenda />
                    </ModalProvider>
                </EventProvider>
            </Route>
            <Route component={BrandSearch} />
        </Switch>
    </Router>,
   
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}
