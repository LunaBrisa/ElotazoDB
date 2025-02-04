"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = require("express");
const index_1 = require("./src/routes/index");
const body_parser_1 = require("body-parser");
const path_1 = require("path");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "src", "views"));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use("/", index_1.default);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit');
});
