import {Switch, Route} from 'react-router-dom';
import About from './About';
import ITcenter from './ITcenter'

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={About}/>
      <Route path='/ITcenter'  component={ITcenter}/>
    </Switch>
  )
}

export default Routes
