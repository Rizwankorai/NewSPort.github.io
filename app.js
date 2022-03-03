let burger = document.querySelector(".burger");
let menubar = document.querySelector(".menubar");
let cross = document.querySelector("#cross");
let li = document.querySelectorAll("ul li");
burger.addEventListener("click", function () {
    burger.classList.add("display-none");
    // burger.style.display = "none";
    // menubar.classlist.add("right");
    // menubar.classlist.add(' right');
    // menubar.classlist += " right";
    // console.log(menubar.classlist);
    // menubar.style.right = "0";
    let cl = menubar.classList;
    console.log(cl);
    menubar.classList.add("right");
});
cross.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.remove("display-none");
    // menubar.style.right = "-100%";
    menubar.classList.remove('right');
});
li.forEach((list) => {
    list.addEventListener("click", function () {

        burger.classList.remove("display-none");
        // menubar.style.right = "-100%";
        menubar.classList.remove('right');
    });
});
