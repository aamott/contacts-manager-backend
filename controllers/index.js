/* displayJoke
   req - request
   res - response */
displayJoke = (req, res) => {
    const data =
        'How did the telephone propose to his girlfriend? ...he gave her a ring.';
    // send status, then send data. data doesn't have to be sent, it can 
    // just return res.status(200).
    res.status(200).send(data);
};


module.exports = {
    displayJoke,
};