


function flipBug(){

    document.getElementById('flipBug').style.transform = "rotateY(180deg)";

}
function flipBug2(){

    document.getElementById('flipBug').style.transform = "rotateY(0deg)";

}



function flipChess(){

    document.getElementById('flipChess').style.transform = "rotateY(180deg)";

}

function flipChess2(){

    document.getElementById('flipChess').style.transform = "rotateY(0deg)";

}

function flipNBA(){

    document.getElementById('flipNBA').style.transform = "rotateY(180deg)";

}

function flipNBA2(){

    document.getElementById('flipNBA').style.transform = "rotateY(0deg)";

}



function flipT(){

    document.getElementById('flipT').style.transform = "rotateY(180deg)";

}

function flipT2(){

    document.getElementById('flipT').style.transform = "rotateY(0deg)";

}

function flipCube(){

    document.getElementById('flipCube').style.transform = "rotateY(180deg)";
    

}

function flipCube2(){

    document.getElementById('flipCube').style.transform = "rotateY(0deg)";

}


function flipNC(){

    document.getElementById('flipNC').style.transform = "rotateY(180deg)";

}

function flipNC2(){

    document.getElementById('flipNC').style.transform = "rotateY(0deg)";

}










$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });