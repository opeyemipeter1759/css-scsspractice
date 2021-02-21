import { Switch, Route } from "react-router-dom";
import About from "./About";
import ITcenter from "./ITcenter";
import FAQ from "./FAQ";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={About} />
      <Route path="/ITcenter" component={ITcenter} />
      <Route path="/faq" component={FAQ} />
    </Switch>
  );
}

export default Routes;
