-- CreateTable
CREATE TABLE "customers" (
    "customer_id" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_password" TEXT NOT NULL,
    "customer_adress" TEXT NOT NULL,
    "customer_city" TEXT NOT NULL,
    "customer_state" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "orders" (
    "order_id" TEXT NOT NULL,
    "order_procut" TEXT NOT NULL,
    "order_release" TIMESTAMP(3) NOT NULL,
    "order_deliver" TIMESTAMP(3) NOT NULL,
    "order_destination" TEXT NOT NULL,
    "delivermanId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "delivermans" (
    "deliverman_id" TEXT NOT NULL,
    "deliverman_name" TEXT NOT NULL,
    "deliverman_email" TEXT NOT NULL,
    "deliverman_password" TEXT NOT NULL,
    "deliverman_adress" TEXT NOT NULL,
    "deliverman_city" TEXT NOT NULL,
    "deliverman_state" TEXT NOT NULL,

    CONSTRAINT "delivermans_pkey" PRIMARY KEY ("deliverman_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_customer_email_key" ON "customers"("customer_email");

-- CreateIndex
CREATE UNIQUE INDEX "delivermans_deliverman_email_key" ON "delivermans"("deliverman_email");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_delivermanId_fkey" FOREIGN KEY ("delivermanId") REFERENCES "delivermans"("deliverman_id") ON DELETE RESTRICT ON UPDATE CASCADE;
