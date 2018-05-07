var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    db.burger.findAll({
        include: [db.customer]
    }).then(function (data) {
        var hbsObject = { burgers: data };
        console.log(data);
        res.render("index", hbsObject);
        // res.json(data[4].customers[0].customer_name);
    });
});

router.post("/burgers/create", function (req, res) {
    db.burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function (dbburger) {
        res.redirect("/burgers");
        // console.log(dbburger);
    }).catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.redirect("/burgers");
        });
});

router.put("/burgers/update/:id", function (req, res) {
    var condition = "id: " + req.params.id;

    console.log("condition: ", condition);

    console.log(req.body.devoured);
    console.log(req.body.burger_name);
    console.log(req.body.customer_name);

    db.customer.create(
        {
            customer_name: req.body.customer_name,
            burger_name: req.body.burger_name,
            burgerId: req.params.id
        }
    ).then(function (dbcustomer) {
        db.burger.update(
            { devoured: req.body.devoured },
            {
                where:
                    {
                        id: req.params.id
                    }
            })
    }).then(function (dbcustomer) {
        res.redirect("/burgers");
    }).catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.redirect("/burgers");
        });

});

module.exports = router;

