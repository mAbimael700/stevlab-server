/*
  Warnings:

  - Added the required column `modified_at` to the `directory_historials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "directory_historials" DROP COLUMN "modified_at",
ADD COLUMN     "modified_at" TIMESTAMP(3) NOT NULL;
