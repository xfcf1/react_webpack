import 'zepto/zepto.min';
const domain = '';
import { isLoading, isError } from './actions/modal';

export default function requireData(url, data={}, success, method='POST'){
    return dispatch => {
        dispatch(isLoading(true));
        const token = sessionStorage.getItem('token') || '386c68cb-d097-4fff-bb02-c309c76a3481';
        data.token = token;
        data = data ? JSON.stringify(data) : '';
        Zepto.ajax({
            url: `${domain}${url}`,
            headers: {'Content-Type': 'application/json'},
            type: method,
            dataType: 'json',
            data: data,
            success: ((data) => {
                dispatch(isLoading(false));
                if(data.code == 0){
                    if(typeof success == 'function'){
                        success(data);
                    }
                }
                else {
                    dispatch(isError(true, data.msg));
                }
            }),
            error: ((data) => {
                dispatch(isLoading(false));
                dispatch(isError(true, data.msg));
            })
        })
    }
}
