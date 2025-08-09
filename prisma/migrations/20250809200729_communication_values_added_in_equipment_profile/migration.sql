/*
  Warnings:

  - You are about to drop the column `result_id` on the `result_sends` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "result_sends" DROP CONSTRAINT "fk_result_sends_result_id_results_id";

-- AlterTable
ALTER TABLE "equipment_profiles" ADD COLUMN     "ack_trigger" VARCHAR(50),
ADD COLUMN     "ack_type" VARCHAR(50),
ADD COLUMN     "handshake_type" VARCHAR(50),
ADD COLUMN     "requires_ack" BOOLEAN DEFAULT false,
ADD COLUMN     "requires_handshake" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "result_sends" DROP COLUMN "result_id",
ADD COLUMN     "result_folio" BIGINT;

-- AddForeignKey
ALTER TABLE "result_sends" ADD CONSTRAINT "fk_result_sends_result_folio_results_folio" FOREIGN KEY ("result_folio") REFERENCES "results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
