var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    db.burger.findAll().then(function (data) {
        var hbsObject = { burgers: data };
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function (req, res) {
    db.burger.create({
        burger_name: req.body.burger_name
    }).then(function (dbburger) {
        res.redirect("/burgers");
        console.log(dbburger);
    });
});

router.put("/burgers/update/:id", function (req, res) {
    var condition = "id: " + req.params.id;

    console.log("condition: ", condition);

    console.log(req.body.devoured);

    db.burger.update(
        { devoured: req.body.devoured },
        { where: 
            {id: req.params.id
            }
        }).then(function () {
            res.redirect("/burgers");
        });
});

module.exports = router;