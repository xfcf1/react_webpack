import React from 'react';
import 'antd/style/index.less';
import { DatePicker } from 'antd';
import { Link } from 'react-router';
import '../style.css';

export default class Index extends React.Component{
    render(){
        return(
            <section>
                <h1>index</h1>
                <Link to="test">link to test page</Link><br/>
                <DatePicker/>
            </section>
        )
    }
}