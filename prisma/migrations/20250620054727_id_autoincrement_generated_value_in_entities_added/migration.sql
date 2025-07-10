-- AlterTable
CREATE SEQUENCE directory_historials_id_seq;
ALTER TABLE "directory_historials" ALTER COLUMN "id" SET DEFAULT nextval('directory_historials_id_seq');
ALTER SEQUENCE directory_historials_id_seq OWNED BY "directory_historials"."id";

-- AlterTable
CREATE SEQUENCE equipments_id_seq;
ALTER TABLE "equipments" ALTER COLUMN "id" SET DEFAULT nextval('equipments_id_seq');
ALTER SEQUENCE equipments_id_seq OWNED BY "equipments"."id";

-- AlterTable
CREATE SEQUENCE histogram_results_id_seq;
ALTER TABLE "histogram_results" ALTER COLUMN "id" SET DEFAULT nextval('histogram_results_id_seq');
ALTER SEQUENCE histogram_results_id_seq OWNED BY "histogram_results"."id";

-- AlterTable
CREATE SEQUENCE parameters_id_seq;
ALTER TABLE "parameters" ALTER COLUMN "id" SET DEFAULT nextval('parameters_id_seq');
ALTER SEQUENCE parameters_id_seq OWNED BY "parameters"."id";

-- AlterTable
CREATE SEQUENCE result_sends_id_seq;
ALTER TABLE "result_sends" ALTER COLUMN "id" SET DEFAULT nextval('result_sends_id_seq');
ALTER SEQUENCE result_sends_id_seq OWNED BY "result_sends"."id";

-- AlterTable
CREATE SEQUENCE results_id_seq;
ALTER TABLE "results" ALTER COLUMN "id" SET DEFAULT nextval('results_id_seq');
ALTER SEQUENCE results_id_seq OWNED BY "results"."id";

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";
