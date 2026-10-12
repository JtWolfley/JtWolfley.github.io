
const playerList = document.getElementById("player-list");

const getPlayers = async () => {

    try {

        const response = await fetch(
            "https://jtwolfley.github.io/csce242/nbawebsite/nba.json"
        );

        if (!response.ok) {
            throw new Error("Could not load players");
        }

        const players = await response.json();

        playerList.innerHTML = "";

        players.forEach((player) => {

            const article = document.createElement("article");
            article.className = "player";

            const image = document.createElement("img");
            image.src = player.img_name;
            image.alt = player.name;

            const name = document.createElement("h3");
            name.textContent = player.name.toUpperCase();

            const info = document.createElement("p");
            info.textContent =
                player.position + " - " + player.team.toUpperCase();

            const link = document.createElement("a");
            link.href = player.popup;
            link.className = "player-button";
            link.textContent = "VIEW STATS";

            article.appendChild(image);
            article.appendChild(name);
            article.appendChild(info);
            article.appendChild(link);

            playerList.appendChild(article);

        });

    } catch (error) {

        console.error(error);

        playerList.textContent =
            "Unable to load players. Please try again later.";

    }

};

getPlayers();
