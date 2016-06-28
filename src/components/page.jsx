import React from 'react';
import { DatePicker } from 'antd';
import { Link } from 'react-router';
import '../style.css';
import { withRouter } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class Page extends React.Component{
    render(){
        return(
            <section className={'page ' + (this.props.className || '')}>
                <QueueAnim>
                    <div key="1">
                        {this.props.children}
                    </div>
                </QueueAnim>
            </section>
        )
    }
}
export default withRouter(Page);
