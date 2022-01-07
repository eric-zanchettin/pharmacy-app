import { IoWarning } from 'react-icons/io5';
import { ErrorContainer } from "./styles";

interface ErrorProps {
    message: string;
};

export function ErrorMessage({ message: errorMessage }: ErrorProps ) {
    return (
        <ErrorContainer>
            <h1><IoWarning /></h1>
            <span>
                <h2>Erro!</h2>
                <p>Um erro ocorreu ao registrar esta Farmácia...</p>
                <p>{errorMessage}</p>
            </span>
        </ErrorContainer>
    );
};