import React from 'react';
import { DatePicker } from 'antd';
import { Link } from 'react-router';
import Page from './page.jsx';
import { withRouter } from 'react-router'

class Index extends React.Component{
    click(){
        this.props.router.push({pathname: 'test', query: {id: '123'} });
    }
    render(){
        return(
            <Page>
                <h1>Home</h1>
                <div onClick={()=>{this.click()}}>click to test page</div>
                <Link to="test">link to test page</Link><br/>
                <DatePicker/>
            </Page>
        )
    }
}
export default withRouter(Index);