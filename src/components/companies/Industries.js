import React from 'react';

function Industries( props ) {
    console.log( props );
    // props is an obj 
    // props holds the data passed from parent comp 
    // props are read-only 
    // props are immutable

    return(
        <div>
           <p>Operating in { props.name } domain since { props.year}</p>
        </div>
    )
}

export default Industries;