const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

/* GET users listing. */
//router.get('/', userController.getAll)

router.post('/auth', function(request, response){
    var json = request.body;
    var userinstance = new userController()
    user = userinstance.auth(json)
    response.send(user); 
})

module.exports = router