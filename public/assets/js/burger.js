//Make sure the page fully loads
$(document).ready(function(){

// Create a new burger
    $('#submit').on('click',function(event){
      event.preventDefault();
      var burgerName = $('#burgerInput').val().trim();

      //Make sure the value was not empty
      if (burgerName == "") {
        return;
      } else {

        //Get the value of the burger and set devoured to false
        var newBurger = {
                burgerName: burgerName,
                devoured: 0
        };

        //Post to the database
        $.ajax('/api/burger', {
            type: "POST",
            data: newBurger
        });
        location.reload();
      }
    });

    //Update a burger to be devoured
    $('.changeStatus').on('click', function(event){
        event.preventDefault();
        console.log(this);
        //Get the id of the burger
        var updatedBurger = {
            id: $(this).data("id"),
            devoured: 1
        };

        var url = '/api/burger/' + updatedBurger.id
        console.log(url)
        $.ajax(url, {
            type: 'PUT',
            data: updatedBurger
        })
        location.reload();
    })
})
