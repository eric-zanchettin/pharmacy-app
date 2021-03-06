import { PrismaClient, Pharmacy, PharmacyFilials, } from '@prisma/client';
const prisma = new PrismaClient();

type PharmacyModel = Omit<Pharmacy, "id">

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

export const PharmacyDB = {
    getAllPharmacies: async (): Promise<Pharmacy[]> => {
        try {
            const results = await prisma.pharmacy.findMany();

            return results;
        } finally {
            prisma.$disconnect();
        };
    },

    getPharmacyById: async (pharmacyId: number): Promise<Promise<Pharmacy> | Promise<any>> => {
        try {
            const results = await prisma.pharmacy.findFirst({
                where: {
                    id: pharmacyId,
                },
            });

            return results;
        } finally {
            prisma.$disconnect();
        };
    },

    newPharmacy: async (pharmacyData: PharmacyModel): Promise<Pharmacy> => {
        try {
            const results = await prisma.pharmacy.create({ data: pharmacyData });

            return results;
        } finally {
            prisma.$disconnect();
        };
    },

    newFilial: async (mainPharmacyId: number, filialPharmacyId: number): Promise<PharmacyFilials> => {
        try {
            const results = await prisma.pharmacyFilials.create({
                data: {
                    main_pharmacy: mainPharmacyId,
                    filial_pharmacy: filialPharmacyId,
                },
            });

            return results;
        } finally {
            prisma.$disconnect();
        };
    },

    deleteFilial: async (mainPharmacyId: number, filialPharmacyId: number): Promise<void> => {
        try {
            await prisma.pharmacyFilials.deleteMany({
                where: {
                    AND: [
                        { main_pharmacy: mainPharmacyId },
                        { filial_pharmacy: filialPharmacyId },
                    ],
                },
            });

            return;
        } finally {
            prisma.$disconnect();
        };
    },

    udpatePharmacy: async (pharmacyData: Pharmacy): Promise<void> => {
        try {
            await prisma.pharmacy.update({
                data: pharmacyData,
                where: {
                    id: pharmacyData.id,
                },
            });

            return;
        } finally {
            prisma.$disconnect();
        };
    },

    unbindFilials: async (pharmacyId: number): Promise<void> => {
        try {
            await prisma.pharmacyFilials.deleteMany({
                where: {
                    main_pharmacy: pharmacyId,
                },
            });

            return;
        } catch {
            prisma.$disconnect();
        };
    },

    deleteAllRelatedFilials: async (pharmacyId: number): Promise<void> => {
        try {
            await prisma.pharmacyFilials.deleteMany({
                where: {
                    OR: [
                        { main_pharmacy: pharmacyId },
                        { filial_pharmacy: pharmacyId },
                    ],
                },
            });

            return;
        } finally {
            prisma.$disconnect();
        };
    },

    deletePharmacy: async (pharmacyId: number): Promise<void> => {
        try {
            await prisma.pharmacy.delete({
                where: {
                    id: pharmacyId,
                },
            });

            return;
        } finally {
            prisma.$disconnect();
        };
    },

    getRelatedFilials: async (mainPharmacyId: number): Promise<PharmacyFilialsInfo[]> => {
        try {
            const results = await prisma.pharmacyFilials.findMany({
                select: {
                    main_pharmacy: true,
                    filial: {
                        select: {
                            id: true,
                            logo: true,
                            name: true,
                            phone: true,
                        },
                    },
                },
                where: {
                    main_pharmacy: mainPharmacyId,
                },
            });

            return results;
        } finally {
            prisma.$disconnect();
        }
    },
    getPharmacyByName: async (pharmacyName: string): Promise<PharmacyModel[]> => {
        try {
            const results = await prisma.pharmacy.findMany({
                where: {
                    name: {
                        contains: pharmacyName,
                    },
                },
            });

            return results;
        } finally {
            prisma.$disconnect();
        };
    },
};