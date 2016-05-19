import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
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
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="page"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    style={{height: '100%'}}
                >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </Provider>
        )
    }
}