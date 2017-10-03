import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Logout extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.props.location.pathname);
        this.state = { url: this.props.location.pathname };
    }

    componentWillMount() {
        browserHistory.push('/404');
    }

    render() {
        return (
            <div className='my404'>
                <strong>404</strong>
                <h1>Desculpe "<a>{this.state.url}</a>" não existe</h1>
                <h2>:(</h2>
            </div>
        );
    }
}