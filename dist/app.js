"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var client = new pg_1.Client({
    connectionString: "postgresql://postgres:password@localhost:5432/postgres?sslmode=disable"
});
client.connect();
