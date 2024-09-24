-- CreateTable
CREATE TABLE `cadastro_empresa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_emp` VARCHAR(191) NOT NULL,
    `CNPJ_emp` VARCHAR(191) NOT NULL,
    `email_emp` VARCHAR(191) NOT NULL,
    `contato_emp` VARCHAR(191) NOT NULL,
    `endereco_emp` VARCHAR(191) NOT NULL,
    `senha_emp` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cadastro_cliente` (
    `cliente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `cadastro_cliente_cpf_key`(`cpf`),
    UNIQUE INDEX `cadastro_cliente_email_key`(`email`),
    PRIMARY KEY (`cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
