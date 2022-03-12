-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_cpf_key" ON "students"("cpf");
