import styled from 'styled-components';

export const RegistrationForm = styled.form`
    margin: 4vh auto;
    
    header {
        display: block;
        margin: auto;
        padding: 0.5rem;
        width: 50%;

        text-align: center;
        text-transform: uppercase;
        letter-spacing: 4px;
        color: #FFF;
        background-color: blue;

        border-radius: 8px 8px 0 0;
    }
    
    section {
        position: relative;
        margin: auto;
        padding: 3.5rem 4rem 1rem 4rem;
        width: 50%;
        height: auto;

        background-color: #FFF;
        border-right: 2px solid #cccccc;
        border-left: 2px solid #cccccc;
        border-bottom: 2px solid #cccccc;
        
        border-radius: 0 0 8px 8px;

        p {
            font-size: 1.2rem;
        }

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        
            margin-bottom: 3.5rem;
        }

        .short-div {
            display: grid;
            grid-template-columns: 15% 50% 15% 23%;

            input {
                margin: 0;
            }
        }

        .short-div-reverse {
            display: grid;
            grid-template-columns: 15% 20% 15% 58.5%;

            input {
                margin: 0;
            }
        }

        button {
            position: relative;
            left: 82%;
            bottom: 8px;
            
            margin-left: 1rem;
            padding: 1rem;
            
            font-weight: bolder;

            border-radius: 12px;

            &:hover {
                text-decoration: underline;
            }
        }

        .btn-ok {
            color: #FFF;
            background: blue;
        }

        .btn-cancel {
            color: blue;
        }
    }
`

export const RegistrationInput = styled.input`
    padding: 1rem;
    width: 85%;
    height: 3.5rem;
    
    font-size: 1.6rem;

    background: #e8e8e8;
    border-radius: 12px;

    outline: none;
`