-- CreateTable
CREATE TABLE "test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nametest" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "test_nametest_key" ON "test"("nametest");
