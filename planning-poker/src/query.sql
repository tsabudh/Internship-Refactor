CREATE TABLE
    "users" (
        "id" INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        "name" VARCHAR(255) NOT NULL,
        "email" VARCHAR(255) NOT NULL UNIQUE,
        "password" VARCHAR(255) NOT NULL,
    );

CREATE TABLE
    "sessions" (
        "id" INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        "code" VARCHAR(100) NOT NULL UNIQUE,
        "name" VARCHAR(255) NOT NULL,
        "moderator" INT NOT NULL,
        FOREIGN KEY ("moderator") REFERENCES "users"("id"),
    );

CREATE TABLE
    "sessionMember" (
        "id" INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        "userId" INT NOT NULL,
        "sessionId" INT NOT NULL,
        UNIQUE KEY ("userId", "sessionId"),
        FOREIGN KEY ("userId") REFERENCES "users"("id"),
        FOREIGN KEY ("sessionId") REFERENCES "sessions"("id")
    );

CREATE TABLE
    "stories" (
        "id" INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        "title" VARCHAR(255) NOT NULL,
        "description" TEXT NOT NULL,
        "points" INT NOT NULL,
        "sessionId" INT NOT NULL,
        FOREIGN KEY ("sessionId") REFERENCES "sessions"("id")
    );