import { Router } from 'express';
import PharmacyController from '../controllers/PharmacyController';
import GenericsValidator from '../validators/generics';

export const routePharmacy = Router();
const genericsValidator = new GenericsValidator();
const pharmacy = new PharmacyController();

routePharmacy.get('/pharmacy/', pharmacy.getPharmacies);
routePharmacy.get('/pharmacy/:pharmacyId', pharmacy.getPharmacy);
routePharmacy.post('/pharmacy/', genericsValidator.emptyDataValidator, pharmacy.registerPharmacy);
routePharmacy.put('/pharmacy/', genericsValidator.emptyDataValidator, pharmacy.updatePharmacy);
routePharmacy.delete('/pharmacy/:pharmacyId', pharmacy.deletePharmacy);
routePharmacy.get('/pharmacyFilials/', pharmacy.getFilialsByPharmacyId);