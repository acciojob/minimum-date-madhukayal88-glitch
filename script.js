// minDate.js
const readline = require("readline");

function minDate(dates) {
  if (!Array.isArray(dates) || dates.length === 0) {
    throw new Error("Input must be a non-empty array of date strings");
  }
  return dates.reduce((min, current) => current < min ? current : min);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter dates separated by spaces (YYYY/MM/DD):\n", (answer) => {
  try {
    const dates = answer.trim().split(/\s+/);
    const result = minDate(dates);
    console.log("Earliest date:", result);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    rl.close();
  }
});