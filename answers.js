// 1
document.getElementById("container");

// 2
document.querySelector("#container");

// 3
document.getElementsByClassName("second");

// 4
document.querySelector("ol .third");

// 5
let section = document.querySelector("#container");
// section.innerText = "Hello!"; // Commented out to avoid erasing entire section text

// 6 
let footer = document.querySelector(".footer");
footer.classList.add("main");

// 7
// let footer = document.querySelector(".footer");
footer.classList.remove("main");

// 8
let newLi = document.createElement("li");

// 9
newLi.innerText = "four";

// 10
let ul = document.querySelector("ul");
ul.append(newLi);

// 11
let orderedList = document.querySelectorAll("ol li");
for (let li of orderedList) {
    li.style.backgroundColor = "green";
}

// 12
// let footer = document.querySelector(".footer");
footer.remove();
