
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "workout_type" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(9) UNIQUE NOT NULL,
);

CREATE TABLE "workout" (
    "workout_id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "workout_type_id" INT REFERENCES "workout_type",
    "one_rep_max" INT NOT NULL,
    "week" INT NOT NULL,
    "weight" INT NOT NULL,
    "set" INT NOT NULL,
    "reps" INT NOT NULL,
    "created_at" DATE

);