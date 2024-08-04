
var button = document.querySelectorAll(".HBD").length;

for(var i=0; i < button; i++) {

    document.querySelectorAll(".HBD")[i].addEventListener("click", function (){

        var audio = new Audio('sounds/happy-birthday-4-version-166418.mp3');
        audio.play(); 
    });
}