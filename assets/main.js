

const dropdownOne = document.getElementById("dropdownOne");
const dropdownTwo = document.getElementById("dropdownTwo");

const body = document.getElementById("body")
const dropdownMenuOne = document.getElementById("dropdownMenuOne");
const dropdownMenuTwo = document.getElementById("dropdownMenuTwo");

const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");

dropdownMenuOne.addEventListener("click", function(){
    dropdownOne.classList.toggle("drop-down-menu-show");
    if(dropdownTwo.classList.contains ("drop-down-menu-show")){
        dropdownTwo.classList.remove("drop-down-menu-show")
    }
})
dropdownMenuTwo.addEventListener("click", function(){
    dropdownTwo.classList.toggle("drop-down-menu-show");
    if(dropdownOne.classList.contains ("drop-down-menu-show")){
        dropdownOne.classList.remove("drop-down-menu-show")
    }
})

fullBody.addEventListener("click",function (){
    if(dropdownOne.classList.contains ("drop-down-menu-show") && dropdownTwo.classList.contains ("drop-down-menu-show")){
        dropdownOne.classList.remove("drop-down-menu-show") 
       
    }
}

)

bar.addEventListener("click", function(){
menu.classList.toggle ("menu-active");
})


