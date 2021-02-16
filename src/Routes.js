import {Switch, Route} from 'react-router-dom';
import About from './About';

function routes() {
  return (
    <Switch>
      <Route path='/' exact component={About}/>
    </Switch>
  )
}

export default routes
