const express = require( 'express' );
const Actions = require( './helpers/actionModel' );
const router = express.Router();

//RECIEVING ALL ACTIONS OF PROJECT ID
router.get( '/:id' , async ( req, res ) => {
    try {
        const actions = await Actions.get( req.query.id );
        if ( actions ) {
            res.status( 200 ).json( actions );
        } else {
            res.status( 404 ).json({ message: 'Actions not found' })
        }
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).json({ message: 'Error getting the Actions' });
    }
});

//UPDATING PROJECTS ACTIONS



module.exports = router;