const mongoose = require("mongoose");

const playerSchema = { name: String };

exports.Player = mongoose.model("Player", playerSchema);
