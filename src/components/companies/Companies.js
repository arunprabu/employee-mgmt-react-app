import React from 'react';
import Campuses from './Campuses';
import Industries from './Industries';
import Team from './Team';
import Service from './Services';
import Careers from './Careers';
import Client from './Client';
import Support from './Support';
import EventList from './EventList';
import BookEvents from './BookEvents';

// Functional Component with Arrow Function 
const Companies = () => {
    function onBtnClickHandler(){
        alert("click works");
    }

    function onSubmitBtnHandler(event) { // to get the trace about event object
        console.log(event);
    }

    return(
        <div>
            <h1>React Js Concepts</h1>
            <h2>Comp with Arrow Fn</h2>
            <p>IBM India</p>
            <p>IBM USA</p>
            <p>IBM Canada</p>
            <p>IBM Australia</p>
            <hr />
            <h2>Nesting Components</h2>
            <Campuses></Campuses>

            <hr />
            <h2>Props ( parent comp passing data to child comp)</h2>
            <Industries name="Aerospace"></Industries>
            <Industries name="Education"></Industries>
            <Industries name="Electronics" year="1960"></Industries>
            <Industries name="Banking" year="1980"></Industries>

            <hr />
            <h2>Props Children (data passed to child component but as children)</h2>
            <Team>John Miller, Steve Smith</Team>

            <hr />
            <h2>Class Component</h2>
            <Service></Service>

            <hr />
            <h2>Class Component with props</h2>
            <Careers domain="Education" jobsCount="10"></Careers>
            <Careers domain="Aerospace" jobsCount="23"></Careers>
            <Careers domain="Electronics" jobsCount="34"></Careers>
            <Careers domain="Banking" jobsCount="20"></Careers>
            
            <hr/>
            <h2>Handling props children in Class Component</h2>
            <p>Some of our happy Clients</p>
            <Client>AT&T</Client>
            <Client>Whirlpool</Client>
            <Client>LiquidPower</Client>
            
            <hr/>
            <h2>Construct JSX using React API (JS)</h2>
            <Support></Support>

            <hr/>
            <h2>Inline Styles in JSX</h2>
            <div style={{backgroundColor: 'yellow', color: 'green', fontSize: '20px' }}>
                lorem ipsum...
            </div>

            <hr/>
            <h2>States in ReactJs</h2>
            <EventList></EventList>

            <hr/>
            <h2>Handling Events in ReactJS</h2>
            <button onClick={onBtnClickHandler}>Click me</button>
            <br/> <br/>
            <button type="submit" onClick={onSubmitBtnHandler}>Submit</button>


            <hr/>
            <h2>Changing States</h2>
            <BookEvents></BookEvents>

        </div>
    )
}

export default Companies;