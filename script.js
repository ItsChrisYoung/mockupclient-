$(document).ready(function() {

      /*
        $("ul li").click(function() {
          var clicked_href = $(this).children('a').attr('href');
          $('img').hide();
          $(clicked_href).show();
        });
        */

      $('.carousel').carousel({
        interval: 1000 * 10
      });

      
$("#submit").click(function(){
   
if (
    $("#firstname").val() == "" ||
    $("#lastname").val() == "" ||
    $("#email").val() == "" ||
    $("#card").val() == "" ||
    $("#SSN").val() == "" 
            ){
            alert("Please fill all the sections.");
            } else {
            alert("Form is submitted. Thank you for helping the leaders of tommorow.");
            }
 });
});