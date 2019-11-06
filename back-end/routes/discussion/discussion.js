var express = require('express');
var router = express.Router();
var passport = require('passport');
var discussionController = require('./controller/discussionController')
var categoryController = require('../category/categoryController/categoryController')
/* GET home page. */

// .get route for catogeries (separate routes)

// .get routes to pull all topics  individually and all posts within.

router.get('/category/:ID', function(req, res, next) {
    res.send('CATOGARIES');
  });

//   router.post('/category/Topic/:ID', function(req, res, next) {
//     res.send('Topic');
//   });
 

// router.get('/get-all-discussions/:ID', discussionController.getAllDiscussions);

router.post('/create-post', passport.authenticate('jwt', { session: false }), discussionController.createPost);

router.get('/get-discussion-by-all-category/:id',  categoryController.getDiscussionByAllCategoryID);
router.get('/get-discussion-by-category-politics/:id',  categoryController.getDiscussionByCategoryPoliticsID);
router.get('/get-discussion-by-category-general/:id',  categoryController.getDiscussionByCategoryGeneralID);
router.get('/get-discussion-by-category-sports/:id',  categoryController.getDiscussionByCategorySportsID);

router.get('/get-all-user-discussions/:id', passport.authenticate('jwt', { session: false }), discussionController.getAllUserDiscussions)

router.delete('/delete-by-id/:id', passport.authenticate('jwt', { session: false }), discussionController.deleteByID)

module.exports = router;
