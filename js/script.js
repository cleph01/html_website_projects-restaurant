const mainDish = document.querySelector(".dish1");
const dishes = document.querySelectorAll(".small-img-col img");

console.log("dishes");
dishes.forEach((dish) => {
    dish.addEventListener("click", () => {
        mainDish.src = dish.src;
    });
});
