/*
  Warnings:

  - The `result_folio` column on the `histogram_results` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `result_folio` column on the `parameters` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `result_folio` column on the `result_sends` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `results` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `results` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "histogram_results" DROP CONSTRAINT "fk_histogram_results_result_folio_results_folio";

-- DropForeignKey
ALTER TABLE "parameters" DROP CONSTRAINT "fk_parameters_result_folio_results_folio";

-- DropForeignKey
ALTER TABLE "result_sends" DROP CONSTRAINT "fk_result_sends_result_folio_results_folio";

-- AlterTable
ALTER TABLE "histogram_results" DROP COLUMN "result_folio",
ADD COLUMN     "result_folio" BIGINT;

-- AlterTable
ALTER TABLE "parameters" DROP COLUMN "result_folio",
ADD COLUMN     "result_folio" BIGINT;

-- AlterTable
ALTER TABLE "result_sends" DROP COLUMN "result_folio",
ADD COLUMN     "result_folio" BIGINT;

-- AlterTable
ALTER TABLE "results" DROP CONSTRAINT "results_pkey",
ADD COLUMN     "id" BIGINT NOT NULL,
ADD CONSTRAINT "results_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "histogram_results" ADD CONSTRAINT "fk_histogram_results_result_folio_results_folio" FOREIGN KEY ("result_folio") REFERENCES "results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "parameters" ADD CONSTRAINT "fk_parameters_result_folio_results_folio" FOREIGN KEY ("result_folio") REFERENCES "results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "result_sends" ADD CONSTRAINT "fk_result_sends_result_folio_results_folio" FOREIGN KEY ("result_folio") REFERENCES "results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
