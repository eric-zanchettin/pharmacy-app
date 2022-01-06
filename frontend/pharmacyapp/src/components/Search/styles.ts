import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    
    margin: 2rem auto;
    width: 30%;
    
    background-color: #e6e6e6;
    border: 2px solid #cccccc;
    border-radius: 50rem;
    
    text-align: center;
    
    input {
        padding: 1.5rem 1rem;
        width: 100%;
        height: 100%;

        background: #e6e6e6;
        border-radius: 50px 0 0 50px;
        border-right: 2px solid #cccccc;
        
        font-size: 16pt;
        
        outline: none;
    }

    span {
        padding: 1rem;
        
        font-size: 1.5rem;
        
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            color: blue;
            font-weight: bolder;
        }
    }
`;