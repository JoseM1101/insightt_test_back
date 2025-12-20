/*
  Warnings:

  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cognitoId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `password`,
    ADD COLUMN `cognitoId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_cognitoId_key` ON `users`(`cognitoId`);
