import { Link } from "react-router-dom";
import { Container, Content } from './styles';
import pharmacyAppLogo from '../../assets/pharmacyapp-logo.png';

export function Header() {
    return (
        <Container>
            <Content>
                <Link to="/">
                    <img src={pharmacyAppLogo} alt="pharmacyapp Logo" />
                </Link>
                <Link to="register-pharmacy">
                    <button type="button">
                        Nova Farmácia
                    </button>
                </Link>
            </Content>
        </Container>
    );
};