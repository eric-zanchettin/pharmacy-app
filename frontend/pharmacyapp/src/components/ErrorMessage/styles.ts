import styled from 'styled-components';

export const ErrorContainer = styled.div`
    position: fixed;
    top: 9rem;
    left: 0.8rem;
    padding: 1rem;
    
    display: flex;
    align-items: center;
    
    
    background: #ff4040;
    color: #FFF;
    
    border-radius: 1rem;

    span {
        margin-left: 1rem;
    }

    @keyframes fade-out {
        from { opacity: 1 }
        to { opacity: 0}
    }

    animation-name: fade-out;
    animation-delay: 8s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
`;