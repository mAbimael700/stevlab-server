/*
  Warnings:

  - You are about to drop the column `ack_trigger` on the `equipment_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `ack_type` on the `equipment_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `handshake_type` on the `equipment_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `requires_ack` on the `equipment_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `requires_handshake` on the `equipment_profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "equipment_profiles" DROP COLUMN "ack_trigger",
DROP COLUMN "ack_type",
DROP COLUMN "handshake_type",
DROP COLUMN "requires_ack",
DROP COLUMN "requires_handshake",
ADD COLUMN     "ack" VARCHAR(50),
ADD COLUMN     "handshake" VARCHAR(50);
