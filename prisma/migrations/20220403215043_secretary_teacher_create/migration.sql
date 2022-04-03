-- CreateTable
CREATE TABLE "secretaries" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sector" TEXT NOT NULL,

    CONSTRAINT "secretaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "theme" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secretaries_cpf_key" ON "secretaries"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_cpf_key" ON "teachers"("cpf");
