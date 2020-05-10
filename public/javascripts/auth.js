$(document).ready(function(){
    $("#loginForm").submit(event => {
        event.preventDefault();   // Prevent form send data
        let redirectUrl = "/123/profile";
        if (location.pathname.includes("admin")){
          redirectUrl = "/admin/dashboard";
        }
        
        $.ajax({
          type: "POST",
          url: "/login",
          data: $("#loginForm").serialize(),
          success: (data) => {
            if (data.success) {
              window.location.replace(redirectUrl);
            } else {
              $('#errorLogin').removeClass('hide');
            }
          },
          dataType: 'json'
        });
      });
});