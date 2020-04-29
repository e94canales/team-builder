import styled from 'styled-components'

const CharacterListContainer = styled.div`
    display: flex;
    
    
    
    .characters{
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin-left: 20%;
        background-color: #e3e3e3;

    }
    
    .card {
        padding: 1%;
        width: 25%;
        border: 1px #d4d4d4 solid;
        

        .infoContainer {
            display: flex;
            justify-content: space-between; 
            align-content: center;
                       
            padding: 5%;

            .info{
                
                width: 80%;

                h2 {
                    font-size: 1rem;
                    
                }
                h3 {
                    color: grey;
                    font-size: .8rem;
                    padding-top: 1%;
                }
            }
            .add{
                color: white;
                width: 20%;
                height: 5vh;
                cursor: pointer;     
                background-color: green;
                outline: none;

                &:hover {
                    background-color: #69eb1e;
                    
                }
                
            }
            
        }
        
    }

`

export default CharacterListContainer