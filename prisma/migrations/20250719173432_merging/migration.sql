/*
  Warnings:

  - The primary key for the `communication_profiles` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "equipment_profiles" DROP CONSTRAINT "fk_equipment_profiles_communication_profile_communication_pr";

-- AlterTable
ALTER TABLE "communication_profiles" DROP CONSTRAINT "communication_profiles_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(20),
ADD CONSTRAINT "communication_profiles_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "equipment_profiles" ALTER COLUMN "communication_profile" SET DATA TYPE VARCHAR(20);

-- AddForeignKey
ALTER TABLE "equipment_profiles" ADD CONSTRAINT "fk_equipment_profiles_communication_profile_communication_pr" FOREIGN KEY ("communication_profile") REFERENCES "communication_profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
