import React, {useEffect, useState } from 'react'
import CharacterListContainer from '../styles/CharacterListContainerStyles'
import SideBarContainer from '../styles/SideBarContainer'
import axios from 'axios'

const initialFormValues = {
    name: '',
    species: ''
}

const CharacterList = props => {

    const [ characterList, setCharacterList ] = useState([])
    const [ myCrew, setCrew ] = useState([])  
    const [ formValues, setFormValues ] = useState(initialFormValues)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then (response => {
                setCharacterList(response.data.results)
                console.log(response.data.results);
            })
            .catch (error => {
                console.log(error);
                
            })
    }, [])

    const addToCrew = person => {
        setCrew([...myCrew, person])
      }
  

    const savePerson = (person) => {
        if (myCrew.includes(person)){
            alert('You\'ve already added this person!')
        }
        else {
            addToCrew(person)
        }
    }
    

    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        
        const newPerson = {
            image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
            id: formValues.name,
            name: formValues.name,
            species: formValues.species
        }

        setCrew([...myCrew, newPerson])

        setFormValues(initialFormValues)
    }    
    
    return (
        <CharacterListContainer>

            <SideBarContainer>
                <div className='topContainer'>
                    <h1>My Crew</h1>
                    <input className='nameInput'
                        name='name'
                        value={formValues.name}
                        type='text' 
                        placeholder='Name'
                        onChange={onInputChange}
                    
                    ></input>
                    <input className='speciesInput'
                        name='species'
                        value={formValues.species}
                        type='text' 
                        placeholder='Species'
                        onChange={onInputChange}
                    
                    ></input>
                    <div className='add' onClick={onSubmit}>Add</div>
                </div>
                
                {
                    myCrew.map( person => {
                        return (
                        <div id={person.id} key={person.id}>
                            <div className='person'>
                                <img src={person.image} alt={person.name}/>
                                <div className='personInfo'>
                                    <h2>{person.name}</h2>
                                    <p>{person.species}</p>
                                </div>
                                <div className='remove' onClick={() => {
                                    setCrew(myCrew.filter( e => {
                                        return e.id !== person.id
                                    }))
                                }}>❌</div>
                            </div>
                        </div>

                        )
                    })
                }
                
            </SideBarContainer >

            <div className='characters'>
            {
                characterList.map( char => {
                   
                    return (
                        <div className='card' key={char.id}>
                            <img src={char.image} alt={char.name} />
                            <div className='infoContainer'>
                                <div className='info'>
                                    <h2>{char.name}</h2>
                                    <h3>{char.species}</h3>
                                </div>
                                <button className='add' onClick={ e => {
                                    savePerson(char)                                    
                                }}>Add</button>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
        </CharacterListContainer>
    )
}

export default CharacterList