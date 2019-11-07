var express = require('express');
var router = express.Router();
var passport = require('passport');
var discussionController = require('./controller/discussionController')
var categoryController = require('../category/categoryController/categoryController')
/* GET home page. */


// router.post('/create-post', passport.authenticate('jwt', { session: false }), discussionController.createPost);

router.post('/create-category', categoryController.createCategory);

router.post('/create-topic',  categoryController.createTopic);

router.get('/get-category-by-id/:id', categoryController.getCategoryByID);

router.get('/get-discussion-topic-by-id/:id', categoryController.getDiscussionByTopic);

router.get('/get-all-user-discussionPosts/:id', discussionController.getAllUserDiscussionPosts)

router.delete('/delete-by-id/:id', passport.authenticate('jwt', { session: false }), discussionController.deleteByID)

module.exports = router;
