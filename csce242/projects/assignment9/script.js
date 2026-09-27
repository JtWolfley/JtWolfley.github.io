const road = document.getElementById("road");

const colors = ["red", "blue", "orange", "purple", "green", "pink"];

const createCar = (left, top, color) => {
    const car = document.createElement("div");
    car.classList.add("car");
    car.style.left = left + "px";
    car.style.top = top + "px";
    car.style.background = color;

    const topCar = document.createElement("div");
    topCar.classList.add("car-top");

    const wheel1 = document.createElement("div");
    wheel1.classList.add("wheel");
    wheel1.classList.add("left-wheel");

    const wheel2 = document.createElement("div");
    wheel2.classList.add("wheel");
    wheel2.classList.add("right-wheel");

    car.append(topCar);
    car.append(wheel1);
    car.append(wheel2);

    road.append(car);
};

for(let i = 0; i < 7; i++){
    let left = Math.floor(Math.random() * (road.clientWidth - 90));
    let lane = Math.floor(Math.random() * 2);
    let top;

    if(lane == 0){
        top = 18;
    } else {
        top = 100;
    }

    let color = colors[Math.floor(Math.random() * colors.length)];

    createCar(left, top, color);
}