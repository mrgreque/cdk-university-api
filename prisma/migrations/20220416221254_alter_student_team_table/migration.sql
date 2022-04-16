/*
  Warnings:

  - The primary key for the `student_teams` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `student_teams` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_teams" DROP CONSTRAINT "student_teams_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "student_teams_pkey" PRIMARY KEY ("studentId", "teamId");
