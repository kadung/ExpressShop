$(document).ready(function(){
    $("#loginForm").submit(event => {
        event.preventDefault();   // Prevent form send data
        var path = window.location.pathname;
        console.log(window.location.href);
        $.ajax({
          type: "POST",
          url: "/login/admin",
          data: $("#loginForm").serialize(),
          success: (data) => {
            console.log("success");
          },
          dataType: 'json'
        });
      });
});