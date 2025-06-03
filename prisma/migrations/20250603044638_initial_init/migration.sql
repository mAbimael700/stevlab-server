-- CreateTable
CREATE TABLE "communication_profiles" (
    "id" VARCHAR(10) NOT NULL,
    "checksum_regex" VARCHAR(50),
    "type" VARCHAR(20),

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
    "active" BOOLEAN,
    "communication_type" VARCHAR(25),

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
    "connection_status" VARCHAR(20),
    "active" BOOLEAN,

    CONSTRAINT "equipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "histogram_results" (
    "id" BIGINT NOT NULL,
    "result_folio" VARCHAR(20),
    "description" VARCHAR(25),
    "value" VARCHAR(10),
    "created_at" TIMESTAMP(6),
    "active" BOOLEAN,

    CONSTRAINT "histogram_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parameters" (
    "id" BIGINT NOT NULL,
    "result_folio" VARCHAR(15),
    "equipment_id" BIGINT,
    "parameter_dictionary_id" BIGINT,
    "description" VARCHAR(25),
    "value" VARCHAR(25),
    "unit_measurement" VARCHAR(10),
    "max_range" VARCHAR(10),
    "min_range" VARCHAR(10),
    "created_at" TIMESTAMP(6),
    "active" BOOLEAN,

    CONSTRAINT "parameters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "results" (
    "folio" VARCHAR(20) NOT NULL,
    "created_by" BIGINT,
    "sample_id" VARCHAR(12),
    "created_at" TIMESTAMP(6),
    "last_modified_at" TIMESTAMP(6),
    "active" BOOLEAN,

    CONSTRAINT "results_pkey" PRIMARY KEY ("folio")
);

-- CreateTable
CREATE TABLE "parameter_dictionaries" (
    "id" BIGINT NOT NULL,
    "system_parameter_id" BIGINT,
    "parameter_description" VARCHAR(100),

    CONSTRAINT "parameter_dictionaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "result_sends" (
    "id" BIGINT NOT NULL,
    "result_folio" VARCHAR,
    "send_by" BIGINT,
    "send_at" TIMESTAMP(6),
    "status" VARCHAR(20),
    "payload" JSON,
    "response" JSON,

    CONSTRAINT "result_sends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system_parameters" (
    "id" BIGINT NOT NULL,
    "value" VARCHAR(10),

    CONSTRAINT "system_parameters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGINT NOT NULL,
    "username" VARCHAR(20),
    "password" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipment_configurations" (
    "equipment_id" BIGINT NOT NULL,
    "port" VARCHAR(10) NOT NULL,
    "ip_address" VARCHAR(15) NOT NULL,
    "baud_rate" INTEGER NOT NULL,
    "mac_address" VARCHAR(17) NOT NULL,
    "remote_directory" VARCHAR(500) NOT NULL,

    CONSTRAINT "equipment_configurations_pkey" PRIMARY KEY ("equipment_id")
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
ALTER TABLE "parameters" ADD CONSTRAINT "fk_parameters_parameter_dictionary_id_parameter_dictionaries" FOREIGN KEY ("parameter_dictionary_id") REFERENCES "parameter_dictionaries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "parameters" ADD CONSTRAINT "fk_parameters_result_folio_results_folio" FOREIGN KEY ("result_folio") REFERENCES "results"("folio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "results" ADD CONSTRAINT "fk_results_created_by_users_id" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "parameter_dictionaries" ADD CONSTRAINT "fk_parameter_dictionaries_system_parameter_id_system_paramet" FOREIGN KEY ("system_parameter_id") REFERENCES "system_parameters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "result_sends" ADD CONSTRAINT "fk_result_sends_result_folio_results_folio" FOREIGN KEY ("result_folio") REFERENCES "results"("folio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "result_sends" ADD CONSTRAINT "fk_result_sends_send_by_users_id" FOREIGN KEY ("send_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "equipment_configurations" ADD CONSTRAINT "equipment_configurations_equipment_id_fkey" FOREIGN KEY ("equipment_id") REFERENCES "equipments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
