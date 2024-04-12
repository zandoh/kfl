CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "openId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_openid_key" ON "User"("openId");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
