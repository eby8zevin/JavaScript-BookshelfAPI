// npm install @hapi/hapi
const Hapi = require('@hapi/hapi');

// files
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 
      process.env.NODE_ENV === 'development' 
      ? 'localhost' 
      : 'javascript-bookshelfapi.herokuapp.com',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();