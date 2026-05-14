-- CreateTable
CREATE TABLE `master_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `master_user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `master_cars` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_id` INTEGER NOT NULL,
    `transmission_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `year` SMALLINT UNSIGNED NOT NULL,
    `odometer` INTEGER UNSIGNED NOT NULL,
    `price` INTEGER UNSIGNED NOT NULL,
    `credit` INTEGER UNSIGNED NOT NULL,
    `image` VARCHAR(500) NOT NULL,
    `created_by` INTEGER NOT NULL,
    `updated_by` INTEGER NULL,
    `deleted_by` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `car_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `car_types_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `car_transmissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `car_transmissions_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `master_cars` ADD CONSTRAINT `master_cars_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `car_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `master_cars` ADD CONSTRAINT `master_cars_transmission_id_fkey` FOREIGN KEY (`transmission_id`) REFERENCES `car_transmissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `master_cars` ADD CONSTRAINT `master_cars_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `master_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `master_cars` ADD CONSTRAINT `master_cars_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `master_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `master_cars` ADD CONSTRAINT `master_cars_deleted_by_fkey` FOREIGN KEY (`deleted_by`) REFERENCES `master_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
