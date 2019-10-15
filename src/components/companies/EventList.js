import React, { Component } from 'react';

class EventList extends Component{

    constructor( ){
        super(); // will let us have access to 'this' keyword

        // you can have component level data inside state 
        // state is an obj
        // state can be changed
        // state is mutable

        this.state = {
           events: [
               { eventName: 'Workshop on ReactJS', day: 'Saturday', time: '9AM to 5PM'},
               { eventName: 'Workshop on Redux', day: 'Sunday', time: '9AM to 5PM'}
           ]
        }
        
    }

    render(){
        
        return(
            <div>
                <p>Total No of Events: {this.state.events.length}</p>
                <p>Event Name: {this.state.events[0].eventName } | Day:  {this.state.events[0].day } | Time:  {this.state.events[0].time }</p>
                <p>Event Name: {this.state.events[1].eventName } | Day:  {this.state.events[1].day } | Time:  {this.state.events[1].time }</p>
            </div>
        )
    }
}

export default EventList;
