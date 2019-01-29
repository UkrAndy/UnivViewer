var express = require('express');
var router = express.Router();
var util=require("util");


const mongoose = require("mongoose");
const University=require("../models/University");

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = express.json();




router.post('/add', jsonParser, function(req, res) {
    try {
        console.log(`post  title: ${req.body.univer.title}    `);
        let univer=req.body.univer;
        var university = new University({
            title: univer.title,
            establishedDate: univer.establishedDate,
            rating: univer.rating,
            description: univer.description
        });
        university.save(function (err) {
            //res.setHeader('Access-Control-Allow-Origin',"*")
            res.json({error: err});
        });
    }
    catch (err) {
        res.send(err);
    }
    //res.redirect('/');
});
router.get('/', function(req, res) {
    University.find({}, function(err, universities){
        if(err) {
            console.log(err);
            res.json({error:"Дані не завантажено"})
            return;
        }
        console.log(util.inspect(universities));
        res.json(universities);
    });
});

module.exports = router;