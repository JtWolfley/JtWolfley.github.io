const cities = {
    "New York City": "https://www.google.com/maps?q=New+York+City&output=embed",
    "Miami": "https://www.google.com/maps?q=Miami+Florida&output=embed",
    "San Francisco": "https://www.google.com/maps?q=San+Francisco&output=embed",
    "Seattle": "https://www.google.com/maps?q=Seattle+Washington&output=embed"
};

const parks = {
    "Yellowstone": "https://www.google.com/maps?q=Yellowstone+National+Park&output=embed",
    "Yosemite": "https://www.google.com/maps?q=Yosemite+National+Park&output=embed",
    "Grand Canyon": "https://www.google.com/maps?q=Grand+Canyon+National+Park&output=embed",
    "Zion": "https://www.google.com/maps?q=Zion+National+Park&output=embed"
};

const showDestinations = (places) => {
    const destinations = document.getElementById("destinations");

    destinations.innerHTML = "";
    document.getElementById("map").innerHTML = "";

    for(let place in places) {
        const link = document.createElement("a");
        link.innerHTML = place;

        link.onclick = () => {
            showMap(places[place]);
        };

        destinations.append(link);
    }
};

const showMap = (location) => {
    const map = document.getElementById("map");

    map.innerHTML = "<iframe src='" + location + "'></iframe>";
};

document.getElementById("type").onchange = () => {
    const type = document.getElementById("type").value;

    if(type == "cities") {
        showDestinations(cities);
    } else if(type == "parks") {
        showDestinations(parks);
    } else {
        document.getElementById("destinations").innerHTML = "";
        document.getElementById("map").innerHTML = "";
    }
};