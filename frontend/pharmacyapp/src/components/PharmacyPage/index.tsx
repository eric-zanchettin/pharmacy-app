import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { PharmacyNotFound } from '../PharmacyNotFound';

import { phoneFormatter, cnpjFormatter } from '../../lib/formatters';

import { IoLocationSharp, IoCall, IoPerson, IoTime, IoCard } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { PageContainer } from './styles';
import { FilialsCards } from '../FilialsCard';

interface PharmacyModel {
    id: number;
    logo: string;
    name: string;
    cnpj: string;
    address: string;
    hours_open: number;
    responsible: string;
    phone: string;
    others: string;
};

export function PharmacyPage() {
    const { pharmacyId } = useParams();
    const [ pharmacyData, setPharmacyData ] = useState<PharmacyModel>();
    
    useEffect(() => {
        api.get<PharmacyModel>(`/pharmacy/${pharmacyId}`)
        .then(response => {
            const data = {
                ...response.data,
                cnpj: cnpjFormatter(response.data.cnpj),
                phone: phoneFormatter(response.data.phone, true),
            };

            setPharmacyData(data);
        });
    }, [pharmacyId]);
    
    return (
        <PageContainer>
            {pharmacyData
            ?
                <>
                    <img src={`/images/${pharmacyData?.logo}`} alt={`Banner de ${pharmacyData?.name}`} />
                    <h1>{pharmacyData?.name}</h1>
                    <div className="grid-container">
                        <div>
                            <h2>Informações de Contato</h2>
                            <p><IoCall /> Telefone/Celular: {pharmacyData?.phone}</p>
                            <p><IoPerson /> Responsável: {pharmacyData?.responsible}</p>
                            <p><IoTime /> Aberta durante: {pharmacyData?.hours_open}h</p>
                        </div>
                        <div>
                            <h2>Local e Outros</h2>
                            <p><IoLocationSharp/> Endereço: {pharmacyData?.address}</p>
                            <p><IoCard /> CNPJ: {pharmacyData?.cnpj}</p>
                            <p><IoIosMore /> Outros: {pharmacyData?.others}</p>
                        </div>
                    </div>
                    <h1>Filiais</h1>
                    <FilialsCards mainPharmacyId={pharmacyData?.id} />
                </>
            :
                <PharmacyNotFound />
            }
        </PageContainer>
    );
};