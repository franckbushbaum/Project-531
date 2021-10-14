
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
    "weight_one" INT NOT NULL,
    "set_one" INT NOT NULL,
    "reps_one" INT NOT NULL,
    "weight_two" INT NOT NULL,
    "set_two" INT NOT NULL,
    "reps_two" INT NOT NULL,
    "weight_three" INT NOT NULL,
    "set_three" INT NOT NULL,
    "reps_three" INT NOT NULL,
    "created_at" DATE
);