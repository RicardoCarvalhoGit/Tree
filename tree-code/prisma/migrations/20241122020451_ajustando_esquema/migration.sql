/*
  Warnings:

  - The primary key for the `cadastro_cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cliente_id` on the `cadastro_cliente` table. All the data in the column will be lost.
  - You are about to alter the column `telefone` on the `cadastro_cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `contato_emp` on the `cadastro_empresa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - A unique constraint covering the columns `[CNPJ_emp]` on the table `cadastro_empresa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email_emp]` on the table `cadastro_empresa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `cadastro_cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cadastro_cliente` DROP PRIMARY KEY,
    DROP COLUMN `cliente_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `nome` VARCHAR(255) NOT NULL,
    MODIFY `telefone` VARCHAR(50) NULL,
    MODIFY `senha` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cadastro_empresa` MODIFY `nome_emp` VARCHAR(255) NOT NULL,
    MODIFY `contato_emp` VARCHAR(50) NOT NULL,
    MODIFY `endereco_emp` TEXT NULL,
    MODIFY `senha_emp` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `cadastro_empresa_CNPJ_emp_key` ON `cadastro_empresa`(`CNPJ_emp`);

-- CreateIndex
CREATE UNIQUE INDEX `cadastro_empresa_email_emp_key` ON `cadastro_empresa`(`email_emp`);
