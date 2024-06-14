require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true });
const hospitalSchema = new mongoose.Schema({
    hospitalName: String,
    address: String,
    organ: String,
    mobile: Number,
    email: String,
});
const User = new mongoose.model("User", hospitalSchema);


app.get("/", function (req, res) {
    res.render("home");
});

app.get("/videocall", function (req, res) {
    res.render("videocall");
});
app.get("/signup_hospital", function (req, res) {
    res.render("signup_hospital");
});
app.get("/tables", function (req, res) {
    User.find({}, function (err, foundItems) {
        res.render("tables", { User: foundItems });
    })
});
app.post("/signup", function (req, res) {
    const user = new User({
        hospitalName: req.body.username,
        address: req.body.address,
        organ: req.body.organname,
        mobile: req.body.mnumber,
        email: req.body.email,
    })
    user.save();
    res.redirect("/tables");
});
app.listen(process.env.PORT || 4000, function () {
    console.log("Server started on port 4000");
});
