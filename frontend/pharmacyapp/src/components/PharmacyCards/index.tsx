import { Link } from 'react-router-dom';

import { IoLocationSharp, IoCall, } from 'react-icons/io5';
import { PharmacyContainer, PharmacyCard } from './styles';

interface PharmacyModel {
    id: number;
    logo: string;
    name: string;
    address: string;
    phone: string;
};

interface PharmacyCardsProps {
    pharmaciesData: PharmacyModel[]
}

export function PharmacyCards({ pharmaciesData }: PharmacyCardsProps ) {
    return (
        <>
            <PharmacyContainer>
                {pharmaciesData.map(pharmacy => {
                    return (
                        <Link key={pharmacy.id} to={`/pharmacy/${pharmacy.id}`}>
                            <PharmacyCard>
                                <img src={`/images/${pharmacy.logo}`} alt={`Logo de ${pharmacy.name}`} />
                                <h1>{pharmacy.name}</h1>
                                <div>
                                    <p><IoLocationSharp /> {pharmacy.address}</p>
                                    <p><IoCall /> {pharmacy.phone}</p>
                                </div>
                            </PharmacyCard>
                        </Link>
                    )
                })}
            </PharmacyContainer>
        </>
    );
};