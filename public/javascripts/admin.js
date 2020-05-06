$(document).ready(function(){
    $("#loginForm").submit(event => {
        event.preventDefault();   // Prevent form send data
        
        $.ajax({
          type: "POST",
          url: "/login/admin",
          data: $("#loginForm").serialize(),
          success: (data) => {
            if (data.success) {
              window.location.replace("/admin/home");
            } else {
              $('#errorLogin').removeClass('hide');
            }
          },
          dataType: 'json'
        });
      });
});