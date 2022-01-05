import { Request, Response } from 'express';
import { Pharmacy } from '@prisma/client';
import { PharmacyDB } from '../models/PharmacyModel';

interface PharmacyFilials extends Pharmacy {
    idFilials: number[],
};

export default class PharmacyController {
    async getPharmacies(req: Request, res: Response) {
        try {
            const pharmacyList = await PharmacyDB.getAllPharmacies();

            return res.json(pharmacyList);
        } catch (err) {
            return res.status(500).json({ message: `Um erro ocorreu ao realizar sua Solicitação. ${err}` })
        };
    };

    async getPharmacy(req: Request, res: Response) {
        try {
            const { pharmacyId } = req.params;

            const pharmacy = await PharmacyDB.getPharmacyById(Number(pharmacyId));

            if (!pharmacy) throw new Error("Não há farmácias com este ID!");

            return res.json(pharmacy);
        } catch (err) {
            return res.status(500).json({ message: `Um erro ocorreu ao realizar sua Solicitação. ${err}` })
        };
    };

    async registerPharmacy(req: Request<{}, {}, PharmacyFilials>, res: Response) {
        try {
            const { id, idFilials, ...data } = req.body;

            const pharmacyData: Pharmacy = await PharmacyDB.newPharmacy(data);

            if (idFilials) {
                for (let idFilial of idFilials) {
                    await PharmacyDB.newFilial(pharmacyData.id, idFilial);
                };
            };

            return res.json({ message: "Farmácia registrada com Sucesso!" });
        } catch (err) {
            return res.status(500).json({ message: `Um erro ocorreu ao realizar sua Solicitação. ${err}` })
        };
    };

    async updatePharmacy(req: Request<{}, {}, PharmacyFilials>, res: Response) {
        try {
            const { idFilials, ...data } = req.body;
            const { id: pharmacyId } = req.body;

            await PharmacyDB.udpatePharmacy(data);
            await PharmacyDB.unbindFilials(pharmacyId);

            if (idFilials) {
                for (let idFilial of idFilials) {
                    await PharmacyDB.newFilial(pharmacyId, idFilial);
                };
            };

            return res.json({ message: "Farmácia atualizada com Sucesso!" });
        } catch (err) {
            return res.status(500).json({ message: `Um erro ocorreu ao realizar sua Solicitação. ${err}` })
        };
    };

    async deletePharmacy(req: Request, res: Response) {
        try {
            let { pharmacyId } = req.params;

            await PharmacyDB.deleteAllRelatedFilials(Number(pharmacyId));
            await PharmacyDB.deletePharmacy(Number(pharmacyId));

            return res.json({ message: "Farmácia deletada com Sucesso!" });
        } catch (err) {
            return res.status(500).json({ message: `Um erro ocorreu ao realizar sua Solicitação. ${err}` })
        };
    };
};