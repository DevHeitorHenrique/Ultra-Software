document.addEventListener("DOMContentLoaded",function(){
    const menuToggle= document.querySelector("menu-toggle");
    const naUl=document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        naUl.classlist.toggle("active")
    });
});