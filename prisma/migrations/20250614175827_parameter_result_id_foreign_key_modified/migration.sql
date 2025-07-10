/*
  Warnings:

  - You are about to drop the column `result_folio` on the `parameters` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "parameters" DROP CONSTRAINT "fk_parameters_result_folio_results_folio";

-- AlterTable
ALTER TABLE "parameters" DROP COLUMN "result_folio",
ADD COLUMN     "result_id" BIGINT;

-- AddForeignKey
ALTER TABLE "parameters" ADD CONSTRAINT "fk_parameters_result_folio_results_folio" FOREIGN KEY ("result_id") REFERENCES "results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
