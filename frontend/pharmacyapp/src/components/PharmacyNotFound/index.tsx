import { Link } from 'react-router-dom';

import { IoArrowBack } from "react-icons/io5";
import pharmacyNotFoundImg from '../../assets/pharmacy-not-found.png';
import { Container } from './styles';

export function PharmacyNotFound() {
    return (
        <Container>
            <img src={pharmacyNotFoundImg} alt="Pílulas Quebradas representando Falha" />
            <h1>Ops! Farmácia não Encontrada...</h1>
            <Link to="/"><IoArrowBack /> Voltar à Navegação</Link>
        </Container>
    )
};