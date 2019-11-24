const express = require('express');
// Initialize router
const router = express.Router();
// Load models
let Tracker = require('../models/appTracker.model');

router.get('/trackers', function (req, res) {
    let trackers = Tracker.find({}, function(err, trackers){
        if(err){
            console.log(err);
        }
        else {
            res.json(trackers);
        }
    });
});

// Load single tracker view
router.get('/trackers/:id', function (req, res) {
    Tracker.findById(req.params.id, function(err, tracker){
        res.json(tracker);
    });
});

// Add tracker
router.post('/trackers/add', function (req, res) {

    let tracker = new Tracker();
    tracker.jobTitle = req.body.jobTitle;
    tracker.companyName = req.body.companyName;
    tracker.linkToJobApp = req.body.linkToJobApp;
    tracker.appDeadline = req.body.addDeadline;

    tracker.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json({msg: "success"})
        }
    });
});

// Edit tracker
router.get('/trackers/edit/:id', function (req, res) {
    Tracker.findById(req.params.id, function(err, tracker){
        res.json(tracker);
    });
});
// Update tracker
router.post('/trackers/update/:id', function (req, res) {
    let tracker = {};
    tracker.jobTitle = req.body.jobTitle;
    tracker.companyName = req.body.companyName;
    tracker.linkToJobApp = req.body.linkToJobApp;
    tracker.appDeadline = req.body.addDeadline;
    
    //ERROR MIGHT OCCUR CHECK HERE
    let query = { _id: req.params.id }

    Tracker.update(query, tracker, function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            res.json({msg: "success"})
        }
    });
});

// Delete Tracker
router.delete('/:id', function(req, res){
    let query = { _id: req.params.id }
    Tracker.remove(query, function(err){
        if(err){
            console.log(err);
        }
        else{
             res.json({msg: "success"})
        }
    });
});

module.exports = router;