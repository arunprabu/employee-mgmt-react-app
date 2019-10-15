import React, { Component } from 'react';

class BookEvents extends Component {

    constructor() {
        super(); // will let us have access to 'this' keyword

        // you can have component level data inside state 
        // state is an obj
        // state can be changed
        // state is mutable

        this.state = {
            events: [
                { eventName: 'Workshop on ReactJS', day: 'Saturday', time: '9AM to 5PM', status: 'Not Booked' },
                { eventName: 'Workshop on Redux', day: 'Sunday', time: '9AM to 5PM', status: 'Not Booked' }
            ],
            organizedBy: 'L & D Team'
        }

    }

    onBookEventHandler = () => {
        console.log(this);
        //this.state.events[0].status = 'Not Booked';  ///wrong as it wont re-render

        // state can be changed
        // if we change state using setState it will re-render the component
        this.setState({
            events: [
                {
                    eventName: 'Workshop on ReactJS',
                    day: 'Saturday',
                    time: '9AM to 5PM', status: 'Booked'
                },
                {
                    eventName: 'Workshop on Redux',
                    day: 'Sunday', time: '9AM to 5PM',
                    status: 'Not Booked'
                }
            ]
        });
    }

    render() {
        // changing state will re-render the following
        return (
            <div>
                <p>Total No of Events: {this.state.events.length}</p>
                <p>Organized by: {this.state.organizedBy}</p>
                <p>Event Name: {this.state.events[0].eventName} |
                    Day:  {this.state.events[0].day} |
                    Time:  {this.state.events[0].time} |
                    Status:  {this.state.events[0].status} |

                    <button type="button"
                        className="btn btn-primary"
                        onClick={this.onBookEventHandler}>Book this Event</button>
                </p>


                <p>Event Name: {this.state.events[1].eventName} |
                    Day:  {this.state.events[1].day} |
                    Time:  {this.state.events[1].time} |
                    Status:  {this.state.events[1].status}
                </p>
            </div>
        )
    }
}

export default BookEvents;
