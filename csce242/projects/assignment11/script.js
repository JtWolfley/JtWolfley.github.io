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
                <div class="vacation-card" onclick="showVacation(${index})">

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
        "Myrtle Beach",
        "Beach",
        "Myrtle Beach is a popular beach destination in South Carolina.",
        "Go to the beach, walk on the boardwalk, shop, and eat at restaurants.",
        "images/myrtle-beach.jpg",
        "https://www.google.com/maps?q=Myrtle+Beach+SC&output=embed"
    ),

    new Vacation(
        "Miami Beach",
        "Beach",
        "Miami Beach is a popular vacation destination in Florida with warm weather and beautiful beaches.",
        "Swim, relax on the beach, shop, eat, and explore the city.",
        "images/miami.jpg",
        "https://www.google.com/maps?q=Miami+Beach+Florida&output=embed"
    ),

    new Vacation(
        "Maui",
        "Beach",
        "Maui is a Hawaiian island known for its beaches and tropical scenery.",
        "Go snorkeling, swim, hike, visit waterfalls, and explore the island.",
        "images/maui.jpg",
        "https://www.google.com/maps?q=Maui+Hawaii&output=embed"
    ),

    new Vacation(
        "Aspen",
        "Mountain",
        "Aspen is a mountain town in Colorado that is known for skiing and beautiful scenery.",
        "Ski, snowboard, hike, bike, and explore the town.",
        "images/aspen.jpg",
        "https://www.google.com/maps?q=Aspen+Colorado&output=embed"
    ),

    new Vacation(
        "Gatlinburg",
        "Mountain",
        "Gatlinburg is a mountain town in Tennessee near the Great Smoky Mountains.",
        "Hike, visit the national park, shop, and enjoy the mountain views.",
        "images/gatlinburg.jpg",
        "https://www.google.com/maps?q=Gatlinburg+Tennessee&output=embed"
    ),

    new Vacation(
        "Lake Tahoe",
        "Mountain",
        "Lake Tahoe is a large lake surrounded by mountains in California and Nevada.",
        "Hike, ski, swim, kayak, and enjoy the scenery.",
        "images/lake-tahoe.jpg",
        "https://www.google.com/maps?q=Lake+Tahoe&output=embed"
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

    document.getElementById("modal-image").src =
        vacation.image;

    document.getElementById("modal-type").innerHTML =
        "Type: " + vacation.type;

    document.getElementById("modal-description").innerHTML =
        vacation.description;

    document.getElementById("modal-things").innerHTML =
        vacation.thingsToDo;

    document.getElementById("modal-map").src =
        vacation.mapSrc;

    document.getElementById("vacation-modal").style.display = "block";
}


function closeModal() {

    document.getElementById("vacation-modal").style.display = "none";

}


displayVacations();