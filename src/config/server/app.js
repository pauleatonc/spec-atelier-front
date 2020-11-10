const express = require('express');
const path = require('path');
var enforce = require('express-sslify');

const app = express();
app.use(enforce.HTTPS());

app.use(express.static(path.join(__dirname, '../../../build')));

app.get('*', (_, res) => {
	res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
});

module.exports = app;
