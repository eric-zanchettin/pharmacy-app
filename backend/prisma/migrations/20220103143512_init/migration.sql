-- CreateTable
CREATE TABLE `Pharmacy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo` VARCHAR(500) NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `cnpj` CHAR(14) NOT NULL,
    `address` VARCHAR(500) NOT NULL,
    `hours_open` VARCHAR(10) NOT NULL,
    `responsible` VARCHAR(200) NOT NULL,
    `phone` VARCHAR(11) NOT NULL,
    `others` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `thumbnail` VARCHAR(500) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    `ingredients` VARCHAR(500) NOT NULL,
    `disponibility` BIT(1) NOT NULL,
    `volume` INTEGER NOT NULL,
    `others` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PharmacyFilials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `main_pharmacy` INTEGER NOT NULL,
    `filial_pharmacy` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PharmacyFilials` ADD CONSTRAINT `PharmacyFilials_main_pharmacy_fkey` FOREIGN KEY (`main_pharmacy`) REFERENCES `Pharmacy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PharmacyFilials` ADD CONSTRAINT `PharmacyFilials_filial_pharmacy_fkey` FOREIGN KEY (`filial_pharmacy`) REFERENCES `Pharmacy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
