import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/main.jsx';
import Index from './components/index.jsx';
import Test from './components/test.jsx';

const router = (
    <Route path="/" component={Main}>
        <IndexRoute component={Index}></IndexRoute>
        <Route path="/index" component={Index}></Route>
        <Route path="/test" component={Test}></Route>
        <Route path="*" component={Index}></Route>
    </Route>
)
export default router;