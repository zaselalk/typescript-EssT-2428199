/**
 * 
 * @param { date} date 
 * @returns string
 */

function formatDate(date: Date):string {
    return date.toLocaleDateString("en-US", {
        formatMatcher: "basic",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}

export { formatDate }

// Path: src/app.ts
