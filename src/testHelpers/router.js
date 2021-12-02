import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";

export const wrapWithRout = (component, { path, route }) => {
  const history = createMemoryHistory();
  history.push(route);

  return (
    <Router history={history}>
      <Switch>
        <Route path={path}>
          {component}
        </Route>
      </Switch>
    </Router>
  );
};
