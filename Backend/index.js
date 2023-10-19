const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require("./routes/user");
const app = express();
var cors = require("cors");
// const path = require("dev");
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*", 
  })   
);
// Middleware  
app.use(express.json());  
     
app.use("/api/v1", userRoutes);   

// Static Files Access
// app.use(express.static(path.join(__dirname, './fronted/build')));
// app.get("*", function(req, res){
//   res.sendFile(path.join(__dirname, "./fronted/build/index.html"));
// });
 
// CORS Configuration   
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});