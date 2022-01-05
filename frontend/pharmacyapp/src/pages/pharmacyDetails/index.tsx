import { useParams } from 'react-router-dom';

export function PharmacyDetails() {
    let { pharmacyId } = useParams();

    return (
        <h1>{pharmacyId}</h1>
    );
};