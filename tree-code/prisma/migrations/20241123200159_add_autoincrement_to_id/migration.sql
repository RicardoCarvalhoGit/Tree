-- CreateTable
CREATE TABLE `certificados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `razao_social` TEXT NOT NULL,
    `documento_indetificacao` TEXT NULL,
    `cnpj` TEXT NULL,
    `endereco` TEXT NULL,
    `setor` TEXT NULL,
    `contato_nome` TEXT NULL,
    `contato_email` TEXT NULL,
    `contato_telefone` TEXT NULL,
    `particas_sustentaveis` TEXT NULL,
    `data_envio` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
