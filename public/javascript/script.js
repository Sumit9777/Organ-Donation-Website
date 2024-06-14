var l = document.querySelectorAll(".nav-link").length;
for (var i = 0; i < l; i++) {
    document.querySelectorAll(".nav-link")[i].addEventListener("mouseover", function () {
        this.classList.add("add");
    });
}
for (var i = 0; i < l; i++) {
    document.querySelectorAll(".nav-link")[i].addEventListener("mouseout", function () {
        this.classList.remove("add");
    });
}
var l2 = document.querySelectorAll(".button").length;
for (var i = 0; i < l2; i++) {
    document.querySelectorAll(".button")[i].addEventListener("mouseover", function () {
        this.classList.add("add2");
    });
}
for (var i = 0; i < l2; i++) {
    document.querySelectorAll(".button")[i].addEventListener("mouseout", function () {
        this.classList.remove("add2");
    });
}
var l3 = document.querySelectorAll(".final-list li").length;
for (var i = 0; i < l3; i++) {
    document.querySelectorAll(".final-list li")[i].addEventListener("mouseover", function () {
        this.classList.add("add3");
    });
}
for (var i = 0; i < l3; i++) {
    document.querySelectorAll(".final-list li")[i].addEventListener("mouseout", function () {
        this.classList.remove("add3");
    });
}