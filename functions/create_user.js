const admin = require('firebase-admin'); //gives access to the service account

module.exports = function(req, res) {
    //verify user sent a phone number
    if (!req.body.phone) {
        return res.status(422).send({ error: 'Bad phone number input' })
    }

    //Format the phone number to remove non-digits
    const phone = String(req.body.phone).replace(/[^\d]/g, "") //ensure the request is formatted as a string
    
    //create new user using the phone number
    admin.auth().createUser({ uid: phone })
        .then(user  => res.send(user))     //respond to the user request for creating accounts
        
        .catch(err => res.status(422).send({ error: err}));
};