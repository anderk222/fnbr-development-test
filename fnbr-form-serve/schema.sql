CREATE TABLE "form" (
  "id" bigserial PRIMARY KEY,
  "name" varchar(70) NOT NULL,
  "lastname" varchar(70) NOT NULL,
  "email" varchar(255) NOT NULL,
  "phone" varchar(15),
  "comments" text,
  "area_program_id" bigint,
  "terms" boolean
);

CREATE TABLE "area" (
  "id" bigserial PRIMARY KEY,
  "name" varchar(255) NOT NULL
);

CREATE TABLE "area_program" (
  "id" bigserial,
  "name" varchar(255) NOT NULL,
  "area_id" bigint
);

CREATE TABLE "form_address" (
  "id" bigserial PRIMARY KEY,
  "country" varchar(56),
  "state" varchar(56),
  "city" varchar(56),
  "form_id" bigint
);

ALTER TABLE "form" ADD FOREIGN KEY ("area_program_id") REFERENCES "area_program" ("id");

ALTER TABLE "area_program" ADD FOREIGN KEY ("area_id") REFERENCES "area" ("id");

ALTER TABLE "form_address" ADD FOREIGN KEY ("form_id") REFERENCES "form" ("id");
