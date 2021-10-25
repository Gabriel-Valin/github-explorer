import { Switch, Route } from 'react-router-dom'

import { Dashboard } from '../pages/dashboard'
import { Repository } from '../pages/repository'

export function Routes () {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/repository/:name+' component={Repository}/>
        </Switch>
    )
}