/*
  Warnings:

  - You are about to drop the column `result_folio` on the `result_sends` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "result_sends" DROP CONSTRAINT "fk_result_sends_result_folio_results_folio";

-- AlterTable
ALTER TABLE "result_sends" DROP COLUMN "result_folio",
ADD COLUMN     "result_id" BIGINT;

-- AddForeignKey
ALTER TABLE "result_sends" ADD CONSTRAINT "fk_result_sends_result_id_results_id" FOREIGN KEY ("result_id") REFERENCES "results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
