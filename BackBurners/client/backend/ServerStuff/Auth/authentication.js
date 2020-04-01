const router = require('express').Router();
const USER = require('../Database/Objects/user');

router.post('/auth/signup', async (req, resp, next) => {
    try {
        console.log(req.body)
        //const newUser = await USER.create(req.body)
        //console.log(newUser)
    } catch(error) {
        console.log("ERROR", error)
    }
})

router.post('/auth/login', (req, resp, next) => {
    USER.findOne({where: {email: req.body.email}}).then(user => {
        console.log(user)
    })
})

router.post('/auth/logout', (req, resp, next) => {
    
})

router.get('auth/itsme', (req, res) => {
    res.json(req.user);
});

module.exports = router;