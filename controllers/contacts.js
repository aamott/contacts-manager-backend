const mongodb = require( '../db/connect' );
const ObjectId = require( 'mongodb' ).ObjectId;

/************************
 * GET ALL CONTACTS
 */
const getAll = async ( req, res, next ) => {
  // DEBUGGING
  // console.log("Getting all users")
  const result = await mongodb.getDb().db().collection( 'contacts' ).find();
  result.toArray().then( ( lists ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.status( 200 ).json( lists );
  } );
};

const getSingle = async ( req, res, next ) => {
  const userId = new ObjectId( req.params.id );
  const result = await mongodb
    .getDb()
    .db()
    .collection( 'contacts' )
    .find( {
      _id: userId
    } );
  result.toArray().then( ( lists ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.status( 200 ).json( lists[ 0 ] );
  } );
};


/*************************
 * POST NEW CONTACT
 */
const postNew = async ( req, res, next ) => {
  if ( req.body.firstName && req.body.lastName &&
    req.body.email && req.body.favoriteColor && req.body.birthday ) {
    const newContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    }
    const result = await mongodb
      .getDb()
      .db()
      .collection( 'contacts' )
      .insertOne( newContact );
    res.setHeader( 'Content-Type', 'application/json' );
    res.status( 200 ).json( result.insertedId );
  } else {
    res.setHeader( 'Content-Type', 'application/json' );
    res.status( 400 ).json( {
      error: 'Missing required fields'
    } );
  }
}


/*************************
 * PUT UPDATE CONTACT
 */
const updateContact = async ( req, res, next ) => {
  const userId = new ObjectId( req.params.id );
  const update = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
  const result = await mongodb
    .getDb()
    .db()
    .collection( 'contacts' )
    .updateOne( {
      _id: userId
    }, {
      $set: update
    } );
  res.setHeader( 'Content-Type', 'application/json' );
  if ( result.modifiedCount === 1 ) {
    res.status( 200 ).json( result.modifiedCount );
  } else {
    res.status( 404 ).json( ( result.error || "An error occured while updating contact" ) );
  }
};



/************************
 * DELETE CONTACT
 */
const deleteContact = async ( req, res, next ) => {
  const userId = new ObjectId( req.params.id );
  const result = await mongodb
    .getDb()
    .db()
    .collection( 'contacts' )
    .deleteOne( {
      _id: userId
    } );
  res.setHeader( 'Content-Type', 'application/json' );

  if ( result.deletedCount === 1 ) {
    res.status( 200 ).json( result.deletedCount );
  } else {
    res.status( 404 ).json( {
      error: 'No contact found'
    } );
  }
}



module.exports = {
  getAll,
  getSingle,
  postNew,
  deleteContact,
  updateContact
};