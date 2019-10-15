import React from 'react';

//handling props in arrow function
const Team = (props) => {
    console.log(props);

    return(
        <div>
            <p>IBM founding team</p>
            <p>{ props.children} </p>
        </div>
    )
}

export default Team;