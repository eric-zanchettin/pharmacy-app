import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 12rem;

    margin: 1.5rem;
    
    .filial-card {
        margin-bottom: 5rem;
        width: 100%;
        height: 24rem;
        
        border-radius: 25px 25px 0;
        box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.5);

        span {
            position: relative;
            top: 90%;
            float: left;
            
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            padding: 0.5rem;
            width: 100%;

            background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0,0,0,0.25) 100%);

            h4 {
                font-size: 1.2rem;
                font-weight: bolder;
                color: #FFF;
            }

            p {
                color: #FFF;
            }
        }

        transition: 0.5s;

        &:hover {
            box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.8);
        }
    }

    .no-filials {
        width: 100%;

        text-align: center;
        
        p {
            font-size: 2rem;
            color: black;
            padding-right: 2rem;
        }
    }
`;