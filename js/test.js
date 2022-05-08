$(document).ready(function(){
	//Animation TEST block:
	$('#test').hover(
      function () {
        $(this).animate({right: "0px", opacity: "1"}, 250);
      }, 
      function () {
      	$(this).animate({right: "-10px", opacity: "0.5"}, 500);
      }
    );
    //Animation TEST block end;


});