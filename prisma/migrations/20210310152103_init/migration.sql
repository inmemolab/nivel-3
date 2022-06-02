-- CreateTable
CREATE TABLE "Arrays" (
  "id" SERIAL,
  "min" INTEGER NOT NULL,
  "max" INTEGER NOT NULL,
  "numbers" JSON,
  "missing" JSON,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  PRIMARY KEY ("id")
);
