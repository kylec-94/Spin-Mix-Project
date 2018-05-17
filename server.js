const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const PORT = 3001;
const app = express();


// ******* SETTING UP MONGODB ******* //

// If deployed, use the deployed database. Otherwise use the local database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/spin_mix_db";


// Configure mongoose to use Promises, because callbacks are passe.
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// ********************************** // 


// ******* SETTING UP BODY-PARSER *****//

// Use body-parser for reading form submissions into objects
app.use(bodyparser.urlencoded({ extended: true }));
// Use body-parser for reading application/json into objects
app.use(bodyparser.json());
// ********************************** // 






require('./passport')(app);

app.use(require('./routes'));



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(process.env.PORT || 3000, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
