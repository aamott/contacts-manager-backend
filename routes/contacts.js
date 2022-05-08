const express = require( 'express' );
const router = express.Router();

const contactsController = require( '../controllers/contacts' );

/***************
 * GET ALL CONTACTS
 */
router.get( '/', contactsController.getAll );

router.get( '/:id', contactsController.getSingle );


/***************
 * POST NEW CONTACT
 */
router.post( '/', contactsController.postNew );


/***************
 * PUT UPDATE CONTACT
 */
router.put( '/:id', contactsController.updateContact );


/***************
 * DELETE CONTACT
 */
router.delete( '/:id', contactsController.deleteContact );

module.exports = router;