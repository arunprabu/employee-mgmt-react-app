import React, { Component } from 'react';

class Careers extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>No of Jobs in {this.props.domain}:
                {this.props.jobsCount}</p>
            </div>
        )
    }

}

export default Careers;