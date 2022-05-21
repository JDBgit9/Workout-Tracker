const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Connection URI
//const uri = 
//"mongodb+srv://110120MongoDBatlas_:110120MongoDBatlas_@workout-tracker.bkgq3.mongodb.net/?retryWrites=true&w=majority"


const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
// routes
/*app.use(require("./routes/api.js"));*/
app.get('/', function(req, res){
  res.render('/routes/api.js');
});

/*app.use(require("./routes/view.js"));*/



const PORT = process.env.PORT||3000;

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

