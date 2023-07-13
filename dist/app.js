"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const formattedDate = (0, util_1.formatDate)(new Date());
console.log(`Today's date is ${formattedDate}`);
