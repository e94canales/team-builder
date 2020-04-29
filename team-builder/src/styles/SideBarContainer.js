import styled from 'styled-components'

const SideBarContainer = styled.div`
    text-align: center;
    color: #fd950d;
    width: 20%;
    position: fixed;
    background-color: #1c1c1c;
    height: 100%;

    .topContainer{
        border-bottom: 1px solid white;
        h1 {
            padding: 4%;
            font-family: impact;

        }

        .speciesInput{
            margin-left: 3%;
        }

        .add {
            font-size: .8rem;  
            color: orange;
            background-color: black;
            border: 1px solid white;
            width:20%;
            border-radius: 15px;
            margin: 4% auto;
            cursor: pointer;
            outline: none;
            

            &:hover {
                background-color: #383838;
                
            }
            
        }
    
    }
   
    
    .person {
        display: flex;
        text-align: center;      
        background-color: #1c1c1c;
        border-bottom: white 1px solid;
        align-items: center;
        justify-content: space-between;
        
        
        
        img {
        width: 22%;
        }

        .personInfo{

            width: 80%;
            
            h2 {
                color: orange;
                font-size: 1rem;
                align-self: center;
                padding: 5%;
            }
            p {
                padding: 2%;
            }
        }
        
        .remove{
            font-weight: bold;
            cursor: pointer;
            
            
        }
    }
    
    
    

`

export default SideBarContainer