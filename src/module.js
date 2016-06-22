import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import router from './router';

//import createHashHistory from 'history/lib/createHashHistory';
//const history = createHashHistory({queryKey: false});

ReactDom.render(<Router history={browserHistory}>{router}</Router>, document.getElementById('content'));