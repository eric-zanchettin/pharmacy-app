import { Router, Request, Response } from 'express';
import { routePharmacy } from './pharmacy';

export const route = Router();

route.use(routePharmacy);

route.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
});