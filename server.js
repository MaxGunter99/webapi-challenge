//SERVER ENDPOINTS
/* 

/ - ITS ALIVE

Projects -
    /api/projects - All Projects
        -ADD PROJECT
    /api/projects/:id/actions - See Actions on the Project

Actions -
    /api/actions/:id - See Actions on the /:ID of the project

*/


const express = require( 'express' );
const server = express()

//ROUTERS
const projectRouter = require( './data/projectRouter' );
const actionRouter = require ( './data/actionsRouter' );

//MIDDLEWARE
const morgan = require( 'morgan' );

//GLOBAL MIDDLEWARE
server.use(express.json());
server.use(morgan( 'short' ));

//API URL EXTENSIONS
server.use( '/api/projects', projectRouter );
server.use( '/api/actions' , actionRouter );

//HOMEPAGE
server.get( '/', ( req, res, next ) => {
    res.send( `<h1>ITS ALIVE</h1>` );
});

server.use( errorHandler );

//ERROR HANDLER
function errorHandler( error, req, res, next ) {
    res.status( 400 ).json({ message: 'ERRORrrr', error });
};

module.exports = server;