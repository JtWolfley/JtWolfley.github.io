class Vacation {

    constructor(title, type, description, thingsToDo, image, mapSrc) {

        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;

    }


    getCard(index) {

        return `
            <section class="w3-col s12 m6 l4">

                <div class="vacation-card"
                     onclick="showVacation(${index})">

                    <img src="${this.image}" alt="${this.title}">

                    <h2>${this.title}</h2>

                    <p>${this.type}</p>

                </div>

            </section>
        `;

    }

}


let vacations = [

    new Vacation(
        "Rocky Mountain",
        "Mountain",
        "Rocky Mountain National Park is located in Colorado and is known for its mountains, lakes, and wildlife.",
        "Hike, camp, watch wildlife, take pictures, and enjoy the mountain views.",
        "../../images/rocky.avif",
        "https://www.google.com/maps?q=Rocky+Mountain+National+Park+Colorado&output=embed"
    ),

    new Vacation(
        "Myrtle Beach",
        "Beach",
        "Myrtle Beach is a popular beach destination in South Carolina with a long coastline and many attractions.",
        "Go to the beach, walk on the boardwalk, shop, swim, and visit restaurants.",
        "../../images/myrtle.jfif",
        "https://www.google.com/maps?q=Myrtle+Beach+South+Carolina&output=embed"
    ),

    new Vacation(
        "Smoky Mountains",
        "Mountain",
        "The Great Smoky Mountains are known for their mountain views, forests, wildlife, and hiking trails.",
        "Hike, camp, watch wildlife, visit waterfalls, and enjoy the mountain views.",
        "../../images/smoky.jfif",
        "https://www.google.com/maps?q=Great+Smoky+Mountains+Tennessee&output=embed"
    ),

    new Vacation(
        "Venice Beach",
        "Beach",
        "Venice Beach is a popular beach in California known for its boardwalk, ocean views, and outdoor activities.",
        "Go to the beach, walk along the boardwalk, bike, shop, and watch street performers.",
        "../../images/venice.jfif",
        "https://www.google.com/maps?q=Venice+Beach+California&output=embed"
    ),

    new Vacation(
        "Miami Beach",
        "Beach",
        "Miami Beach is a popular Florida destination known for its beaches, warm weather, and city life.",
        "Swim, relax on the beach, shop, eat at restaurants, and explore the city.",
        "../../images/miami.jfif",
        "https://www.google.com/maps?q=Miami+Beach+Florida&output=embed"
    ),

    new Vacation(
        "Mount Rainier",
        "Mountain",
        "Mount Rainier is a large mountain in Washington surrounded by forests, lakes, and hiking trails.",
        "Hike, camp, take pictures, see waterfalls, and enjoy the mountain scenery.",
        "../../images/mtrainer.jfif",
        "https://www.google.com/maps?q=Mount+Rainier+Washington&output=embed"
    )

];


function displayVacations() {

    let vacationList = document.getElementById("vacation-list");

    for (let i = 0; i < vacations.length; i++) {

        vacationList.innerHTML += vacations[i].getCard(i);

    }

}


function showVacation(index) {

    let vacation = vacations[index];

    document.getElementById("modal-title").innerHTML =
        vacation.title;

    document.getElementById("modal-type").innerHTML =
        vacation.type;

    document.getElementById("modal-description").innerHTML =
        vacation.description;

    document.getElementById("modal-things").innerHTML =
        vacation.thingsToDo;

    document.getElementById("modal-map").src =
        vacation.mapSrc;

    document.getElementById("vacation-modal").style.display =
        "block";

}


function closeModal() {

    document.getElementById("vacation-modal").style.display =
        "none";

}


displayVacations();