# Migration `20200613000349-many-entities`

This migration has been generated by Vadim Vereketa at 6/13/2020, 12:03:49 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "public"."Entity_irrverbId"

ALTER TABLE "public"."MobileApp" ALTER COLUMN "status" SET DEFAULT 'WORK';

ALTER TABLE "public"."Translate" ALTER COLUMN "type" SET DEFAULT 'OTHER';

ALTER TABLE "public"."User" ALTER COLUMN "role" SET DEFAULT 'STANDARD';

ALTER TABLE "public"."Word" ALTER COLUMN "type" SET DEFAULT 'OTHER';
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200612014322-add-test-role..20200613000349-many-entities
--- datamodel.dml
+++ datamodel.dml
@@ -8,9 +8,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 model User {
   createdAt  DateTime @default(now())
@@ -59,14 +59,14 @@
   OTHER
 }
 model Irrverb {
-  id      Int     @default(autoincrement()) @id
-  form1EN String
-  form2EN String
-  form3EN String
-  ru      String
-  Entity  Entity?
+  id       Int      @default(autoincrement()) @id
+  form1EN  String
+  form2EN  String
+  form3EN  String
+  ru       String
+  entities Entity[]
 }
 model Entity {
   id           Int        @default(autoincrement()) @id
```

