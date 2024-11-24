/*
  Warnings:

  - You are about to drop the column `data_envio` on the `certificados` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `certificados` DROP COLUMN `data_envio`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pendente';
