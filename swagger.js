const swaggerAutogen = require( 'swagger-autogen' )();

const port = process.env.PORT || 8080;

const doc = {
    info: {
        title: 'Contacts API',
        description: 'API for managing contacts. This is a sample API for learning purposes.',
    },
    host: 'fathomless-mountain-23773.herokuapp.com:' + port,
    schemes: [ 'http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = [ './routes/index.js' ];

swaggerAutogen( outputFile, endpointsFiles, doc ).then( () => {
    require( './app.js' ); 
} );