import React from 'react';

function Support(){
    /*
        <div title='call us in the number'>
            <p>Contact Support Team...</p>
        </div>
    */

    return(
        React.createElement("div", 
            { title: 'call us in the number' }, 
            React.createElement(
                "p", 
                '', 
                'Contact Support Team at 1800-IBM-THINK'
            )
        )
    )
}

export default Support;