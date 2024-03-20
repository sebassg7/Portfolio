const { Router } = require( 'express' );
const router = Router();

console.log('Hola');

router.post( '/send-email', ( req, res ) => {
    console.log( req.body );
    res.send( 'recieved' );
} )

module.exports = router;