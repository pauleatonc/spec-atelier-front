const app = require('./src/config/server/app');
const config = require('./src/config/server/server');

app.listen(config.port, () => {
	console.log(`The react aplication is running on port: ${config.port}`);
});
