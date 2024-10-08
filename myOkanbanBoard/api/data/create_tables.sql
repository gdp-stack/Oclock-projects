
BEGIN;

DROP TABLE IF EXISTS "card_has_tag", "tag", "card", "list";

CREATE TABLE "list" (
  "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  "title" TEXT NOT NULL,
  "position" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card" (
  "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  "content" TEXT NOT NULL,
  "position" INTEGER NOT NULL DEFAULT 1,
  "color" VARCHAR(7) DEFAULT '#ffffff',
  "list_id" INTEGER NOT NULL REFERENCES "list"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "tag" (
  "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  "name" TEXT NOT NULL,
  "color" VARCHAR(7) DEFAULT '#ffffff',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card_has_tag" (
  "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ,

  "tag_id" INTEGER NOT NULL REFERENCES "tag"("id") ON DELETE CASCADE,
  "card_id" INTEGER NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,

  UNIQUE ("card_id", "tag_id")
);


COMMIT;
