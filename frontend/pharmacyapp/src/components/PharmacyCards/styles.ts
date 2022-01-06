import styled from 'styled-components';

export const PharmacyContainer = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const PharmacyCard = styled.div`
    margin: 1rem;

    background: #FFF;
    border-radius: 20px;
    box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.4);
    
    text-align: center;

    h1 {
        margin-top: 0.5rem;

        font-size: 1.8rem;
        font-weight: bolder;
    }

    img {
        max-width: 100%;
        min-height: 340px;
        object-fit: cover;

        border-radius: 20px 20px 0 0;
    }

    div {
        display: flex;
        justify-content: space-between;

        p {
            margin: 20% 1rem 1rem 1rem;
            font-weight: 300;
            font-size: 0.9rem;
            color: #b3b3b3;
        }
    }
    
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.8);
    }
`