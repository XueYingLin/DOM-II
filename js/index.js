// Your code goes here

const funBus = document.querySelector(".intro img");
funBus.addEventListener("mouseenter", () => {
    funBus.style.transform = "scale(2)";
    funBus.style.transition = "transform 1s";
})
funBus.addEventListener("mouseleave", () => {
    funBus.style.transform = "scale(1)";
})

const welcome = document.querySelector(".intro h2");
welcome.addEventListener("mousedown", () => {
    welcome.style.color = "pink";
})
welcome.addEventListener("mouseup", () => {
    welcome.style.color = "black";
})

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(el => {
    el.addEventListener("click", (e) => {
        el.style.color = "blue";
        e.preventDefault();
    })
})

const textContents = document.querySelectorAll(".text-content");
textContents.forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.transform = "scale(1.2)";
    })
})
textContents.forEach(el => {
    el.addEventListener("mouseout", () => {
        el.style.transform = "scale(1)";
    })
})

const btn = document.querySelectorAll(".btn");
btn.forEach(el => {
    el.addEventListener("dblclick", () => {
       el.style.backgroundColor = "red";
       el.innerHTML = "submitted";
       
    })
})



const contentDestination = document.querySelectorAll("a");
contentDestination.forEach(el => {
    el.addEventListener("focus", () => {
        el.style.backgroundColor = "red";
       
    })
})

contentDestination.forEach(el => {
    el.addEventListener("blur", () => {
        el.style.backgroundColor = "white";
       
    })
})

// Nest two similar events somewhere in the site and prevent the event propagation properly
const a = document.querySelector(".content-destination");
a.addEventListener('click', () => {
    a.style.backgroundColor = "blue";
})

const b = document.querySelector(".content-destination h2");
b.addEventListener('click', (e) => {
    b.style.backgroundColor = "yellow";
    e.stopPropagation();
})