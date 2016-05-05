import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './component/main.jsx';
import Index from './component/index.jsx';
import Test from './component/test.jsx';

const router = (
    <Route path="/" component={Main}>
        <IndexRoute component={Index}></IndexRoute>
        <Route path="/index" component={Index}></Route>
        <Route path="/test" component={Test}></Route>
    </Route>
)
export default router;