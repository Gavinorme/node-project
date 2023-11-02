const showCharacters = async () =>
{
    let response = await fetch("https://node-project-edxo.onrender.com");
    let characterJSON = await response.json();
    let characterDiv = document.getElementById("characters-list");

    characterJSON.forEach((character) => {
        let section = document.createElement("section");
        characterDiv.append(section);

        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = character.name;

        let p = document.createElement("p");
        section.append(p);
        p.innerHTML = ("Actor: " +character.actor);

        let p1 = document.createElement("p");
        section.append(p1);
        p1.innerHTML = ("Role: " +character.role);

        let p2 = document.createElement("p");
        section.append(p2);
        p2.innerHTML = ("Relation: "+character.relation);

        let p3 = document.createElement("p");
        section.append(p3);
        p3.innerHTML = ("Attributes: "+character.attributes);

        let img = document.createElement("img");
        section.append(img);
        img.src = "https://node-project-edxo.onrender.com"+ character.img;
    });
};


window.onload = () =>
{
    showCharacters();
};