const db = require('./db-file');
const templates = require('./templates');
const app = require('./app');

if (process.argv.length < 3) {
    templates.help();
    process.exit(1);
};

app.executeCommand(db, templates);
