const mainDish = document.querySelector(".dish1");
const dishes = document.querySelectorAll(".menu img");

console.log("dishes");
dishes.forEach((dish) => {
    dish.addEventListener("click", () => {
        mainDish.src = dish.src;
    });
});
