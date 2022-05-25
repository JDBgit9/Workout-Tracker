const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
mongoose.connect("mongodb://localhost:27017/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
// routes
app.use(require("./routes/api.js"));

  res.render('./routes/api.js');

app.use(require("./routes/view.js"));


const PORT = process.env.PORT||3000;

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

