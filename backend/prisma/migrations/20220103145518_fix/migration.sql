/*
  Warnings:

  - You are about to alter the column `hours_open` on the `pharmacy` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `Int`.

*/
-- AlterTable
ALTER TABLE `pharmacy` MODIFY `hours_open` INTEGER NOT NULL;
