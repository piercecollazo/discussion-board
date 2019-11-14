var express = require('express');
var router = express.Router();
var passport = require('passport');
var discussionController = require('./controller/discussionController')
var categoryController = require('../category/categoryController/categoryController')
/* GET home page. */


router.post('/create-post/:topicId/:userId', discussionController.createPost);

router.post('/create-category', categoryController.createCategory);

router.post('/create-topic/:catId/:userId',  discussionController.createTopic);

router.get('/get-all-category', categoryController.getAllCategory);

router.get('/get-all-topics/:id', categoryController.getTopicsByCategory);

router.get('/get-all-posts/:id', discussionController.getAllUserDiscussionPosts)

router.delete('/delete-by-id/:id', passport.authenticate('jwt', { session: false }), discussionController.deleteByID)

module.exports = router;
