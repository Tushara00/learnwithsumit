

const dropdownOne = document.getElementById("dropdownOne");
const dropdownTwo = document.getElementById("dropdownTwo");

const body = document.getElementById("body")
const dropdownMenuOne = document.getElementById("dropdownMenuOne");
const dropdownMenuTwo = document.getElementById("dropdownMenuTwo");

const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");
const night = document.querySelector(".night");
const day = document.querySelector(".day");
const imgBoxes = document.querySelectorAll(".image-box");
const bannerOverlay = document.querySelector(".banner-overlay");


night.addEventListener("click",function(){
    console.log( "night clicked");
    imgBoxes.forEach(function(imgBox){
        imgBox.style.backgroundColor = ""
    })
    bannerOverlay.style.backgroundColor = "#0B1120"
    night.style.display = "none"
    day.style.display = "block"
})

day.addEventListener("click",function(){
   
    imgBoxes.forEach(function(imgBox){
        imgBox.style.backgroundColor = "white"
    })
    bannerOverlay.style.backgroundColor = "#F2F6FA"
    night.style.display = "block"
    day.style.display = "none"
})


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



bar.addEventListener("click", function(){
menu.classList.toggle ("menu-active");
})

const menuLists = document.querySelectorAll(".active");

menuLists.forEach(function (menuList) {
    menuList.addEventListener("click", function () {
        document.querySelector(".active-list")?.classList.remove("active-list");
       
        menuList.classList.add("active-list");
    });
});

body.addEventListener("click", function(){
    document.querySelector(".drop-down-menu-show")?.classList.remove(".drop-down-menu-show");  
})



        // Add "active-color" to the clicked menuList
   
   
        







