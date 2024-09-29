const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
	const server = Hapi.server({    
		port: 9000,
		// eslint-disable-next-line no-undef
		host: localhost,
		routes: {
			cors: {
				origin: ['*'],
			},
		},
});

	server.route(routes);

	await server.start();
	console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
