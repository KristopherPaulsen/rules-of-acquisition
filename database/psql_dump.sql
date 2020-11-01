CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS rules(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  number INTEGER NOT NULL,
  content TEXT NOT NULL,
  source TEXT NOT NULL
);
