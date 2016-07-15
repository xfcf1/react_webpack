import objectAssign from 'object-assign';
import { IS_LOADING, IS_ERROR } from '../actions/modal';

export loading(state = {show: false, msg: '正在加载中。。。'}, action){
    switch (action.type) {
        case IS_LOADING:
            return objectAssign({}, state, {show: action.show, msg: action.msg})
        default:
            return state;
    }
}
export error(state = {show: false, msg: '出错了'}, action){
    switch (action.type) {
        case IS_ERROR:
            return objectAssign({}, state, {show: action.show, msg: action.msg})
        default:
            return state;
    }
}
