const Sign_in_box = document.querySelector(".Sign_in_box")

function show_side_bar(){
    Sign_in_box.classList.add("active");
    Sign_in_box.style.left = "0px";
}

const cross = document.querySelector(".cross")

function hide_side_bar(){
    Sign_in_box.style.left = "-350px";
}
