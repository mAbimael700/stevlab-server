-- AlterTable
ALTER TABLE "equipment_configurations" ALTER COLUMN "port" DROP NOT NULL,
ALTER COLUMN "ip_address" DROP NOT NULL,
ALTER COLUMN "baud_rate" DROP NOT NULL,
ALTER COLUMN "mac_address" DROP NOT NULL,
ALTER COLUMN "remote_directory" DROP NOT NULL;
