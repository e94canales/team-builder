import React from 'react'

const Person = props => {

    console.log(props.characterList[0]);
    
    return (
        <div>
            <img src={props.characterList.image}/>
            <h2>{props.characterList.name}</h2>
        </div>
    )
}

export default Person