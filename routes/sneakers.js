var express = require("express");
var router  = express.Router();
var Sneaker = require("../models/sneaker");
var middleware = require("../middleware");
var request = require("request");

//INDEX - show all sneakers
router.get("/", function(req, res){
    // Get all sneakers from DB
    Sneaker.find({}, function(err, allSneakers){
       if(err){
           console.log(err);
       } else {
           request('https://maps.googleapis.com/maps/api/geocode/json?address=sardine%20lake%20ca&key=AIzaSyBtHyZ049G_pjzIXDKsJJB5zMohfN67llM', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body); // Show the HTML for the Modulus homepage.
                res.render("sneakers/index",{sneakers:allSneakers});

            }
});
       }
    });
});

//CREATE - add new sneaker to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to sneakers array
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newSneaker = {name: name, price: price, image: image, description: desc, author:author}
    // Create a new sneaker and save to DB
    Sneaker.create(newSneaker, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to sneakers page
            console.log(newlyCreated);
            res.redirect("/sneakers");
        }
    });
});

//NEW - show form to create new sneaker
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("sneakers/new"); 
});

// SHOW - shows more info about one sneaker
router.get("/:id", function(req, res){
    //find the sneaker with provided ID
    Sneaker.findById(req.params.id).populate("comments").exec(function(err, foundSneaker){
        if(err){
            console.log(err);
        } else {
            console.log(foundSneaker)
            //render show template with that sneaker
            res.render("sneakers/show", {sneaker: foundSneaker});
        }
    });
});

router.get("/:id/edit", middleware.checkUserSneaker, function(req, res){
    console.log("IN EDIT!");
    //find the sneaker with provided ID
    Sneaker.findById(req.params.id, function(err, foundSneaker){
        if(err){
            console.log(err);
        } else {
            //render show template with that sneaker
            res.render("sneakers/edit", {sneaker: foundSneaker});
        }
    });
});

router.put("/:id",middleware.checkUserSneaker, function(req, res){
    Sneaker.findByIdAndUpdate(req.params.id, req.body.sneaker, function(err, updatedSneaker){
       if(err){
           res.redirect("/sneakers");
       } else {
           //redirect somewhere(show page)
           req.flash("success","Successfully Updated!");
           res.redirect("/sneakers/" + req.params.id);
       }
    });
});

router.delete("/:id", middleware.checkUserSneaker, function(req, res){
   Sneaker.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/sneakers");
      } else {
          res.redirect("/sneakers");
      }
   });
});

//middleware
// function isLoggedIn(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     req.flash("error", "You must be signed in to do that!");
//     res.redirect("/login");
// }

module.exports = router;

