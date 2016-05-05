import React from 'react';
import { Link } from 'react-router';

export default class Test extends React.Component{
    render(){
        return(
            <section>
                <h1>Test</h1>
                <Link to="/">to home page</Link>
            </section>
        )
    }
}