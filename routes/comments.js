var express = require("express");
var router  = express.Router({mergeParams: true});
var Sneaker = require("../models/sneaker");
var Comment = require("../models/comment");
var middleware = require("../middleware");

//Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    // find sneaker by id
    console.log(req.params.id);
    Sneaker.findById(req.params.id, function(err, sneaker){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {sneaker: sneaker});
        }
    })
});

//Comments Create
router.post("/",middleware.isLoggedIn,function(req, res){
   //lookup sneaker using ID
   Sneaker.findById(req.params.id, function(err, sneaker){
       if(err){
           console.log(err);
           res.redirect("/sneakers");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //add username and id to comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               comment.save();
               console.log(sneaker);
               sneaker.comments.push(comment);
               sneaker.save();
               console.log(comment);
               req.flash('success', 'Created a comment!');
               res.redirect('/sneakers/' + sneaker._id);
           }
        });
       }
   });
});

router.get("/:commentId/edit", middleware.checkUserComment, function(req, res){
    // find sneaker by id
    Comment.findById(req.params.commentId, function(err, comment){
        if(err){
            res.redirect("back");
        } else {
             res.render("comments/edit", {sneaker_id: req.params.id, comment: comment});
        }
    })
});

router.put("/:commentId", function(req, res){
   Comment.findByIdAndUpdate(req.params.commentId, req.body.comment, function(err, comment){
       if(err){
           res.render("edit");
       } else {
           res.redirect("/sneakers/" + req.params.id);
       }
   }); 
});

router.delete("/:commentId",middleware.checkUserComment, function(req, res){
    Comment.findByIdAndRemove(req.params.commentId, function(err){
        if(err){
            res.redirect("back");
        } else {
            req.flash("success", "Comment deleted");
            res.redirect("/sneakers/" + req.params.id);
        }
    })
});

module.exports = router;