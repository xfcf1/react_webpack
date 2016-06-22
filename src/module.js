import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import router from './router';

//import { Router, useRouterHistory } from 'react-router'
//import { createHashHistory } from 'history'
// useRouterHistory creates a composable higher-order function
//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDom.render(<Router history={browserHistory}>{router}</Router>, document.getElementById('content'));
