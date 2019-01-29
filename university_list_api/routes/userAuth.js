var express = require('express');
var router = express.Router();
var util=require("util");


const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = express.json();
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;




router.post('/login', jsonParser, function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) {
            console.log("---- login faillll ----")
            console.dir(req)
            return res.status(403).send("Not authenticated"); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            console.log("---- login okkk ----")
            return res.status(200).send("ok");
        });
    })(req, res, next);
});
// app.post('/loginn',  passport.authenticate('local', { successRedirect:'/', //'AddProductForm.html',
//     failureRedirect: '/login' },function (){
//
// } {
//
// }));


router.get('/logout',  function(req, res){
    req.logout();
    res.status(200).send("Logged out");
});


module.exports = router;