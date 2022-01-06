import styled from 'styled-components'

export const PageContainer = styled.div`
    img {
        width: 100%;
        max-height: 280px;
        object-fit: cover;
    }

    h1 {
        font-weight: bolder;
        font-size: 3.5rem;
        text-align: center;
    }

    
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        margin: 2.5rem auto;
        width: 50%;
        
        text-align: center;
        
        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        p {
            margin-top: 1rem;
            font-size: 1.2rem;
        }
    }
`;