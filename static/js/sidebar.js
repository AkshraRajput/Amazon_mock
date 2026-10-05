const Sign_in_box = document.querySelector(".Sign_in_box")
const overlay = document.querySelector(".overlay")
const cross = document.querySelector(".cross")

function show_side_bar(){
    Sign_in_box.classList.add("active");
    Sign_in_box.style.left = "0px";
    overlay.style.display = "block";
}

function hide_side_bar(){
    Sign_in_box.style.left = "-350px";
    overlay.style.display = "none";
}

