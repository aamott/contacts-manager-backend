/* displayname
   req - request
   res - response */
displayname = (req, res) => {
    const data =
        'Ammon Richards';
    // send status, then send data. data doesn't have to be sent, it can 
    // just return res.status(200).
    res.status(200).send(data);
};


module.exports = {
    displayname,
};