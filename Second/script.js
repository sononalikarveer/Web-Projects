

const letters= document.querySelectorAll(".letters span");

letters.forEach(function(letter){

    letter.addEventListener("click", function(e){
        e.target.classList.add("active");
    });

});