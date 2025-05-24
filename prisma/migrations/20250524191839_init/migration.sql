-- CreateTable
CREATE TABLE "communication_profiles" (
    "id" VARCHAR(10) NOT NULL,
    "name" VARCHAR(25),
    "checksum_regex" VARCHAR(50),
    "type" VARCHAR(25),

    CONSTRAINT "communication_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "directory_historials" (
    "id" BIGINT NOT NULL,
    "equipment_id" BIGINT,
    "filename" VARCHAR(250),
    "filepath" VARCHAR(500),
    "modified_at" BIGINT,

    CONSTRAINT "directory_historials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipment_profiles" (
    "id" BIGINT NOT NULL,
    "communication_profile" VARCHAR(10),
    "name" VARCHAR(25),

    CONSTRAINT "equipment_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipments" (
    "id" BIGINT NOT NULL,
    "profile_id" BIGINT,
    "name" VARCHAR(25),
    "created_at" TIMESTAMP(6),
    "modified_at" TIMESTAMP(6),
    "last_connection" TIMESTAMP(6),
    "connection_status" VARCHAR(25),

    CONSTRAINT "equipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "histogram_results" (
    "id" BIGINT NOT NULL,
    "result_folio" VARCHAR(25),
    "description" VARCHAR(25),
    "value" VARCHAR(10),

    CONSTRAINT "histogram_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parameters" (
    "id" BIGINT NOT NULL,
    "result_folio" VARCHAR(15),
    "equipment_id" BIGINT,
    "description" VARCHAR(25),
    "value" VARCHAR(25),
    "unit_measurement" VARCHAR(10),
    "max_range" VARCHAR(10),
    "min_range" VARCHAR(10),
    "created_at" TIMESTAMP(6),
    "modified_at" TIMESTAMP(6),

    CONSTRAINT "parameters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "results" (
    "folio" VARCHAR(12) NOT NULL,
    "sample_id" VARCHAR(12),
    "pacient_name" VARCHAR(50),
    "sex" VARCHAR,
    "created_at" TIMESTAMP(6),
    "modified_at" TIMESTAMP(6),

    CONSTRAINT "results_pkey" PRIMARY KEY ("folio")
);

-- AddForeignKey
ALTER TABLE "directory_historials" ADD CONSTRAINT "fk_directory_historials_equipment_id_equipments_id" FOREIGN KEY ("equipment_id") REFERENCES "equipments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "equipment_profiles" ADD CONSTRAINT "fk_equipment_profiles_communication_profile_communication_pr" FOREIGN KEY ("communication_profile") REFERENCES "communication_profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "equipments" ADD CONSTRAINT "fk_equipments_profile_id_equipment_profiles_id" FOREIGN KEY ("profile_id") REFERENCES "equipment_profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "histogram_results" ADD CONSTRAINT "fk_histogram_results_result_folio_results_folio" FOREIGN KEY ("result_folio") REFERENCES "results"("folio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "parameters" ADD CONSTRAINT "fk_parameters_equipment_id_equipments_id" FOREIGN KEY ("equipment_id") REFERENCES "equipments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "parameters" ADD CONSTRAINT "fk_parameters_result_folio_results_folio" FOREIGN KEY ("result_folio") REFERENCES "results"("folio") ON DELETE NO ACTION ON UPDATE NO ACTION;
