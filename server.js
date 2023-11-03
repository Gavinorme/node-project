const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/characters", (req, res) => {
    const characters = [];
    characters[0] = {
        name: "Rick",
        actor: "Justin Roiland",
        role: "Alcoholic scientist",
        relation: "Grandpa",
        attributes: ["reckless", " pessimistic", " megagenius", " courageous"],
        img: "images/rick.png",
    };

    characters[1] = {
        name: "Morty",
        actor: "Justin Roiland",
        role: "Sidekick",
        relation: "Grandson",
        attributes: ["anxious", " awkward", " doubtful", " caring"],
        img: "images/morty.png",
    };

    characters[2] = {
        name: "Jerry",
        actor: "Chris Parnell",
        role: "Dad",
        relation: "Husband",
        attributes: ["unintelligent", " pathetic", " pitiful", " insecure"],
        img: "images/jerry.png",
    };

    characters[3] = {
        name: "Beth",
        actor: "Sarah Chalke",
        role: "Mom",
        relation: "Daughter",
        attributes: ["ambitous", " independent", " intelligent", " insecure"],
        img: "images/beth.png",
    };

    characters[4] = {
        name: "Summer",
        actor: "Spencer Grammer",
        role: "Sister",
        relation: "Granddaughter",
        attributes: [" sarcastic", " energetic", " bold", " wity"],
        img: "images/summer.png",
    };

    characters[5] = {
        name: "Mr. Poopy Butthole",
        actor: "Spencer Grammer",
        role: "Side character",
        relation: "Rick's friend",
        attributes: [" sarcastic", " energetic", " bold", " wity"],
        img: "images/mr poopy.jpeg",
    };

    res.json(characters);
});

app.listen(3000, () => {
    console.log("listening");
});