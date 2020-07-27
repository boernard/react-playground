import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrandSearch } from './components/brandSearch/FilterView'
import { InspirationWall } from './components/inspirationWall/InspirationWall'
import { BrandSession } from './components/brandSession/BrandSession'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Agenda from './components/agenda'
import {
    InspirationContext,
    InspirationProvider,
} from './components/inspirationWall/inspirationContext/InspirationContext'
import { ModalProvider, EventProvider, AttendanceProvider } from './components/agenda/context'
import { RelationProvider } from './components/brandSession/RelationContext'
import { AppProvider } from './AppContext'

declare let module: any

// prettier-ignore
ReactDOM.render(
        <Router basename="/" >
            <AppProvider>
                <Switch>
                    <Route path='/brandsession'>
                        <RelationProvider>
                            <BrandSession />
                        </RelationProvider>
                    </Route>
                    <Route path='/brandsearch'><BrandSearch /></Route>
                    <Route path='/inspiration'>
                        <InspirationProvider>
                            <InspirationWall />
                        </InspirationProvider>
                    </Route>
                    <Route path='/agenda'>
                        <EventProvider>
                            <AttendanceProvider>
                                <ModalProvider>
                                    <Agenda />
                                </ModalProvider>
                            </AttendanceProvider>
                        </EventProvider>
                    </Route>
                    <Route component={BrandSearch} />
                </Switch>
            </AppProvider>          
        </Router>
    ,
   
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}
