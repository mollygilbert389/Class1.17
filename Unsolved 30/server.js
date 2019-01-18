var path = require("path")
var express = require("express")
var exphbs = require("express-handlebars")

var app = express();
app.use(express.static(path.join(__dirname, '/views')))

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var animals = [
    {animalType: "dog", pet: true, fierceness: 4},
    {animalType: "cat", pet: true, fierceness: 10},
    {animalType: "snake", pet: true, fierceness: 7},
    {animalType: "mouse", pet: true, fierceness: 1},
    {animalType: "bear", pet: false, fierceness: 9},
]

var dogs = []

app.get("/dog", function (req, res){
    for (var i = 0; i <animals.length; i +=1){
        var currentAnimal = animals[i]
        if (currentAnimal.pet){
            return res.render("dog", animals[i])
        }
    }
})

app.get("/all-pets", function (req, res) {
    if (animals.pet === true) {
        res.render("index", { index: animals[i] })
        return animals.pet === true
    }
    else
        res.render("index", { index: animals[i] })
    return animals.pet !== true
})

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});