import { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { phoneFormatter } from '../../lib/formatters';

import { IoLocationSharp, IoCall, } from 'react-icons/io5';
import { PharmacyContainer, PharmacyCard } from './styles';

interface PharmacyModel {
    id: number;
    logo: string;
    name: string;
    cnpj: string;
    address: string;
    hours_open: number;
    responsible: string;
    phone: string;
    other: string;
};

export function PharmacyCards() {
    const [pharmacies, setPharmacies] = useState<PharmacyModel[]>([]);

    useEffect(() => {
        api.get('/pharmacy/')
            .then(response => {
                const data = response.data.map((pharmacy: PharmacyModel) => {
                    return {
                        ...pharmacy,
                        phone: phoneFormatter(pharmacy.phone)
                    }
                });

                setPharmacies(data);
            });
    }, []);

    return (
        <>
            <PharmacyContainer>
                {pharmacies.map(pharmacy => {
                    return (
                        <Link to={`/pharmacy/${pharmacy.id}`}>
                            <PharmacyCard>
                                <img src={`/images/${pharmacy.logo}`} alt={`Logo de ${pharmacy.name}`} />
                                <h1 key={pharmacy.id}>{pharmacy.name}</h1>
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