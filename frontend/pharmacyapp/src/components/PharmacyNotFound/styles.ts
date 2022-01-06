import styled from 'styled-components'

export const Container = styled.div`
    margin: 10% auto;

    text-align: center;

    img {
        margin: 2rem 0;
        width: 300px;
        
        object-fit: contain;
    }

    h1 {
        margin-bottom: 1rem;

        font-size: 3rem;
        text-align: center;
        color: #bf0000;
    }

    a {
        font-weight: bolder;

        transition: 0.5s;

        &:hover {
            color: blue;
        }
    }
`