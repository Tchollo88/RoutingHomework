var express = require('express');
var router = express.Router();

var data = [
    { id: 0, name: "Johnny", username: "userA" },
    { id: 1, name: "Timothy", username: "userB" },
    { id: 2, name: "Robberto", username: "userC" }
]

router.get('/person', function(req, res, next) {
    res.status(200);
    res.send(data);
});

router.get('/person/:id', function(req, res, next) {
    res.status(200);
    res.send(data.filter(person => {
       person.id === req.params.id
    }));
});

router.post('/person', function(req, res, next) {
    // note we are adding any data sent to the endpoint to the array. this really needs some checking.
    res.status(200);
    data.push(req.body);
    res.send(req.body);
});

router.put('/person/:id', function(req, res, next) {
    // note we are adding any data sent to the endpoint to the array. this really needs some checking.
   res.status(200);

   var index = data.indexOf(person => {
     return person.id === req.params.id;
   });

   data[index] = req.body;
   res.send(data[index]);
});

router.delete('/person/:id', function(req, res, next) {
    res.status(200);
    data[index] = data.filter(person => person.id != req.params.id);
    res.send(data[index]);
 });