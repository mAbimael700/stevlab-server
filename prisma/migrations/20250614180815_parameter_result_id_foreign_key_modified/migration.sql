/*
  Warnings:

  - You are about to drop the column `result_id` on the `parameters` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "parameters" DROP CONSTRAINT "fk_parameters_result_id_results";

-- AlterTable
ALTER TABLE "parameters" DROP COLUMN "result_id",
ADD COLUMN     "result_folio" BIGINT;

-- AddForeignKey
ALTER TABLE "parameters" ADD CONSTRAINT "fk_parameters_result_folio_results_folio" FOREIGN KEY ("result_folio") REFERENCES "results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
