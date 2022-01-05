import styled from 'styled-components';

export const Container = styled.header`
    background: lightblue;
`;

export const Content = styled.div`
    margin: 0 auto;

    padding: 1rem 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        max-width: 250px;
    }

    button {
        font-size: 1rem;
        color: #FFF;
        background-color: blue;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.5s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;