let navLink=document.querySelectorAll(".nav-link");

navLink.forEach(element => {
    element.addEventListener("click",()=>{
        navLink.forEach(element => {
            element.classList.remove("active");   
             });
        element.classList.toggle("active");
    })
});



let btnNavbar=document.querySelector(".navbar-toggler-icon");
 btnNavbar.addEventListener("click",()=>{
     let btnBar=document.querySelector(".fa-solid");
     btnBar.classList.toggle("fa-x");
 });








