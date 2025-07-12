-- AlterTable
CREATE SEQUENCE parameter_dictionaries_id_seq;
ALTER TABLE "parameter_dictionaries" ALTER COLUMN "id" SET DEFAULT nextval('parameter_dictionaries_id_seq');
ALTER SEQUENCE parameter_dictionaries_id_seq OWNED BY "parameter_dictionaries"."id";
