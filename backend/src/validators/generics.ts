import { Request, Response, NextFunction } from 'express';

export default class GenericsValidator {
    async emptyDataValidator(req: Request, res: Response, next: NextFunction) {
        const keys: any[] = Object.keys(req.body);

        for (let key of keys) {
            if (!req.body[key]) return res.status(400).json({ message: 'Nem todos os dados enviados foram preenchidos!' })
        };
        
        next();
    };
};