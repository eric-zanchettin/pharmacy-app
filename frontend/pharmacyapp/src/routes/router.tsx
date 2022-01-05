import { Routes, Route, } from 'react-router-dom';
import { Home } from '../pages/home';
import { RegisterPharmacy } from '../pages/registerPharmacy';
import { PharmacyDetails } from '../pages/pharmacyDetails';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register-pharmacy" element={<RegisterPharmacy />} />
            <Route path="/pharmacy/:pharmacyId" element={<PharmacyDetails />} />
        </Routes>
    );
};