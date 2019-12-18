const express = require('express')
const router = express.Router()


//routes

// router.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
//     next()
//   })

// router.get('/clients', function(req, res){
//     Client.find({}, function(err, data){
//         res.send(data)
//     })
// })
// router.put('/editclient/:email', function(req, res){
    
//     Client.findOneAndUpdate({email: req.params.email}, {$set: req.body}, function(err, data){
//         err ? console.log("Error: " + err) : null
        
//     })
// })
// router.post('/addClient', function(req, res){
    
//    let newClient = new Client({
//        name: req.body.name,
//        country: req.body.country,
//        owner: req.body.owner
//    })
//    newClient.save()

// })

// router.put('/updateowner/:name', function(req, res){
//     Client.findOneAndUpdate({name: req.params.name}, {$set:{owner: req.body.owner} }, function(err, data){
//         err ? console.log("Error: " + err) : null
        
        
//     })
// })
// router.put('/sendemail/:name', function(req, res){
//     Client.findOneAndUpdate({name: req.params.name}, {$set:{emailType: req.body.email} }, function(err, data){
//        err ? console.log("Error: " + err) : null
        
//     })
// })
// router.put('/sell/:name', function(req, res){
//     Client.findOneAndUpdate({name: req.params.name}, {$set:{sold: true} }, function(err, data){
//        err ? console.log("Error: " + err) : null
        
//     })
// })
module.exports = router