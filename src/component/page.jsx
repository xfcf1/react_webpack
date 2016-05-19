import React from 'react';
import '../../node_modules/antd/dist/antd.css';
import { DatePicker } from 'antd';
import { Link } from 'react-router';
import '../style.css';
import { withRouter } from 'react-router'

class Page extends React.Component{
    render(){
        return(
            <section>
                {this.props.children}
            </section>
        )
    }
}
export default withRouter(Page);