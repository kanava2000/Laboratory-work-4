// EcoComfort Hub - Humidity Monitoring System
// Main application module

const APP_NAME = "EcoComfort Hub";
const VERSION = "1.0.0";

function displayAppInfo() {
    console.log("=================================");
    console.log(`Application: ${APP_NAME}`);
    console.log(`Version: ${VERSION}`);
    console.log("Humidity Monitoring & Communication System");
    console.log("=================================");
}

function main() {
    displayAppInfo();
}

// Run application
main();

module.exports = { displayAppInfo };
