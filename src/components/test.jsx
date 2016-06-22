import React from 'react';
import { Link } from 'react-router';
import Page from './page.jsx';
import { withRouter } from 'react-router'

class Test extends React.Component{
    click(){
        this.props.router.push({pathname: '/', query: {back: '321'} });
    }
    render(){
        return(
            <Page>
                <h1>Test</h1>
                <div onClick={()=>{this.click()}}>click to test page</div>
                <Link to="/">link to test page</Link><br/>
            </Page>
        )
    }
}
export default withRouter(Test);