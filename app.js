const links = document.querySelectorAll('.corfundo[href^="#"]');


function getDistanceFromTheTop(element){
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop, 
        behavior: "smooth",

    });
}


function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    nativeScroll(distanceFromTheTop);
    
    


}

links.forEach((link) =>{
    link.addEventListener("click", scrollToSection);

});



//console.log(links)