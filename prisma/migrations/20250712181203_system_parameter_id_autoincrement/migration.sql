-- AlterTable
CREATE SEQUENCE system_parameters_id_seq;
ALTER TABLE "system_parameters" ALTER COLUMN "id" SET DEFAULT nextval('system_parameters_id_seq');
ALTER SEQUENCE system_parameters_id_seq OWNED BY "system_parameters"."id";
