import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { phoneFormatter } from '../../lib/formatters';

import { PharmacyCards } from '../../components/PharmacyContainer';
import { SearchInput } from '../../components/Search';

interface PharmacyModel {
    id: number;
    logo: string;
    name: string;
    address: string;
    phone: string;
};

export function Home() {
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

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        api.get<PharmacyModel[]>(`/searchPharmacy?pharmacyName=${event.target.value}`)
            .then(response => {
                const data = response.data.map(pharmacy => {
                    return {
                        ...pharmacy,
                        phone: pharmacy.phone,
                    };
                });

                setPharmacies(data);
            });
    };

    return (
        <>
            <SearchInput placeholder="Pesquisar Farmácias..." onChange={handleSearch} />
            <PharmacyCards pharmaciesData={pharmacies} />
        </>
    );
};