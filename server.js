//SERVER ENDPOINTS
/* 

/ - ITS ALIVE

    Projects -
        /api/projects - All Projects
            -ADD PROJECT
        
        /api/projects/:id
            -UPDATE PROJECT
            -DELETE { "id": :id }
        
        /api/projects/:id/actions - See Actions on the Project
    _

    Actions -
        /api/actions/:id - See Projects

        /api/actions/:id/actions - see actions of project
            -ADD
            -DELETE { "id": :id }

    _

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