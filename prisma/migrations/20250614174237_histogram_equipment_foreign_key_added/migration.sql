-- AlterTable
ALTER TABLE "histogram_results" ADD COLUMN     "equipment_id" BIGINT;

-- AddForeignKey
ALTER TABLE "histogram_results" ADD CONSTRAINT "fk_histogram_results_references_equipment_id" FOREIGN KEY ("equipment_id") REFERENCES "equipments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
