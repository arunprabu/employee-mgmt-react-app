import React, { Component } from 'react';

class Client extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>{this.props.children}</p>
            </div>
        )
    }

}

export default Client;