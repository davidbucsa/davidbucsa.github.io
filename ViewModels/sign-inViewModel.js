$(document).ready(function () {
    $('#logInButton').click(function () {
        var email = $('#inputEmail3').val();
        var password = $('#inputPassword3').val();

        signInUser(email, password);

    });


    $('.modal-content').keypress(function(e){
        if(e.which == 13) {
          //dosomething
          alert('Enter pressed');
        }
      })
});