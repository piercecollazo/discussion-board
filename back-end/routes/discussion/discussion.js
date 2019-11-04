var express = require('express');
var router = express.Router();
var passport = require('passport');
var discussionController = require('./controller/discussionController')
/* GET home page. */
router.get('/get-all-discussions', discussionController.getAllDiscussions);

router.post('/create-discussion', passport.authenticate('jwt', { session: false }), discussionController.createDiscussion);

router.get('/get-discussion-by-id/:id', passport.authenticate('jwt', { session: false }), discussionController.getDiscussionByID);

router.get('/get-all-user-discussions/:id', passport.authenticate('jwt', { session: false }), discussionController.getAllUserDiscussions)

router.delete('/delete-by-id/:id', passport.authenticate('jwt', { session: false }), discussionController.deleteByID)

module.exports = router;
