const app = require('./src/config/app');
const config = require('./src/config/server');

app.listen(config.port, () => {
	console.log(`The react aplication is running on port: ${config.port}`);
});
