import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import BasicRoutes from './routes/basic';

function App() {
  return (
    <HashRouter>
      <Switch>
        <BasicRoutes />
      </Switch>
    </HashRouter>
  );
}

export default App;
