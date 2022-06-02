-- CreateTable
CREATE TABLE "Arrays" (
    "id" SERIAL NOT NULL,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "numbers" JSONB NOT NULL,
    "missing" JSONB NOT NULL,
    "minNum" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Arrays_pkey" PRIMARY KEY ("id")
);
