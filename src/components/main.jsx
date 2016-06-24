import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';
let thunkStore = applyMiddleware(thunk)(createStore);
let store = thunkStore(reducers);
import reactTapEvent from 'react-tap-event-plugin';
reactTapEvent();

export default class Main extends React.Component{
    render(){
        return(
            <Provider store={store}>
                {this.props.children}
            </Provider>
        )
    }
}