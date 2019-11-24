const mongoose = require("mongoose");

const appTrackerSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
    jobTitle: String,
    companyName: String,
    linkToJobApp: String,
    appDeadline: String
    }
);

module.exports = mongoose.model("appTracker", appTrackerSchema);