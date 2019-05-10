const express = require( 'express' );
const Projects = require( './helpers/projectModel' );
const router = express.Router();

//RECIEVING ALL PROJECTS
router.get( '/' , async ( req, res ) => {
    try {
        const projects = await Projects.get( req.query.id );
        if ( projects ) {
            res.status( 200 ).json( projects );
        } else {
            res.status( 404 ).json({ message: 'Project not found' })
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Error getting the projects' });
    }
});

//RECIEVING THE PROJECTS BY ID
router.get( '/:id' , async ( req, res ) => {
    try {
        const projects = await Projects.get( req.query.id );
        if ( projects ) {
            res.status( 200 ).json( projects );
        } else {
            res.status( 404 ).json({ message: 'Project not found' })
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Error getting the projects' });
    }
});

//ADD A PROJECT
router.post( '/', async ( req, res ) => {
    console.log( req.body );
    try {
        const projects = await Projects.insert( req.body );
        res.status( 201 ).json( projects );
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Error adding Project' });
    }
});

//DELETE A PROJECT
router.delete( '/:id', async ( req, res ) => {
    try {
        const count = await Projects.remove( req.body.id );
        if ( count > 0 ) {
            res.status( 201 ).json({ message: 'Delete Project Success' });
        } else {
            res.status( 404 ).json({ message: 'No Projects left to Delete' });
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Server Error With Deleting Project' });
    }
});

//UPDATING A PROJECT
router.put( '/:id' , async ( req, res ) => {
    try {
        const project = await Projects.update( req.params.id, req.body );
        if ( project ) {
            res.status( 200 ).json( project );
        } else {
            res.status( 404 ).json({ message: 'Project Not Found' });
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Server Error Updating Post' });
    }
});

//GET PROJECT ACTIONS
router.get( '/:id/actions' , async ( req, res ) => {
    try {
        const project = await Projects.getProjectActions( req.params.id );
        if ( project ) {
            res.status( 200 ).json( project );
        } else {
            res.status( 404 ).json({ message: 'No Actions Found For this Project' });
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Server Error Getting Actions' })
    }
});

// router.post( '/', async ( req, res ) => {
//     console.log( req.body );
//     try {
//         const projects = await Projects.insert( req.body );
//         res.status( 201 ).json( projects );
//     } catch ( error ) {
//         console.log( error );
//         res.status( 500 ).json({ message: 'Error adding Project' });
//     }
// });

module.exports = router;