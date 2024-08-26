$(document).ready(function(){
  $("#search-btn").click( function() {
    var searchTerm  = $("#search").val();
    /*$(".article").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });*/
     $(".article").unmark().mark(searchTerm);
  });
});
