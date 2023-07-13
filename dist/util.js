"use strict";
/**
 *
 * @param { date} date
 * @returns string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date) {
    return date.toLocaleDateString("en-US", {
        formatMatcher: "basic",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
exports.formatDate = formatDate;
// Path: src/app.ts
