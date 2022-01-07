import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { phoneFormatter } from '../../lib/formatters';

import { IoCall } from "react-icons/io5";
import { GiPillDrop } from "react-icons/gi";
import { MoreButton } from '../MoreButton';
import { Container } from './styles';

interface FilialsCardsProps {
    mainPharmacyId: number;
};

interface FilialInfo {
    id: number;
    logo: string;
    name: string;
    phone: string;
};

interface PharmacyFilialsInfo {
    main_pharmacy: number;
    filial: FilialInfo;
}

export function FilialsCards({ mainPharmacyId }: FilialsCardsProps) {
    const [filialsInfo, setFilialsInfo] = useState<PharmacyFilialsInfo[]>();

    useEffect(() => {
        api.get<PharmacyFilialsInfo[]>(`/pharmacyFilials?mainPharmacyId=${mainPharmacyId}`)
            .then(response => {
                const data = response.data.map(filialInfo => {
                    return {
                        ...filialInfo,
                        filial: {
                            ...filialInfo.filial,
                            phone: phoneFormatter(filialInfo.filial.phone, true),
                        },
                    };
                });

                setFilialsInfo(data);
            });
    }, [mainPharmacyId]);

    return (
        <Container>
            {filialsInfo?.length !== 0
            ?
                <>
                    {filialsInfo?.map(filialInfo => {
                        return (
                            <div
                                key={filialInfo.filial.id}
                                className="filial-card"
                                style={{ background: `url(/images/${filialInfo.filial.logo})`, backgroundSize: 'cover', }}
                            >
                                <Link to={`/pharmacy/${filialInfo.filial.id}`}>
                                    <span>
                                        <h4>{filialInfo.filial.name}</h4>
                                        <p><IoCall /> {filialInfo.filial.phone}</p>
                                    </span>
                                </Link>
                            </div>
                        );
                    })}
                </>
            :
                <span className="no-filials">
                    <p><GiPillDrop /> Esta farmácia não possui Filiais!</p>
                </span>
            }
            <MoreButton />
        </Container>
    );
};