

$(document).ready(function(){
  // This function basically outputs
  // a maximum of 10 Wikipedia articles
  // after the user clicks the 
  // submit button.
  $("#srch").click(function(){
  
    // Get the inputted strings
    // of text.
    var srch=$("#srchT").val();
    
    var lk="https://en.wikipedia.org/w/api.php?action=opensearch&search="+srch+"&format=json&callback=?";
    
    // Use ajax with a synchronous command
    // to send and get the output results
    // in JSON.
    $.ajax({
      type: "GET",
      url: lk,
      async: false,
      dataType:"json",
      success: function(d){
        $("#fill").html('').fadeOut(100);
        // Output each article link in a
        // text box within a for loop.
        for(var i=0;i<d[1].length;i++){
          
          $("#fill").prepend("<li class='lb'><a href="
            +"'"+d[3][i]+"'"+"target='_blank'>"+
        d[1][i]+"</a><p>"+d[2][i]+"</p></li>").fadeIn(400);
        
        }
      },
      error: function(msg){
        alert("Something is wrong!");
      }
      
    });
    
  });
  
  // If an Enter key is pressed, then
  // the program will execute the 
  // $("#srchT").click() function.
  $("#srchT").keypress(function(d){
    if(d.which===13){
      $("#srch").click();
    } 
  });
});