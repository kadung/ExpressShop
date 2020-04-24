$(document).ready(function(){
    $("#login").submit(event => {
        event.preventDefault();   // Prevent form send data
        var path = window.location.pathname;
        console.log(window.location.href);
        // $.ajax({
        //   type: "POST",
        //   url: "/cart/add",
        //   data: $("#addToCart").serialize(),
        //   success: (data) => {
        //     $("#cartBadge").text(data.totalCartItems);
        //     alert(data.message)
        //   },
        //   dataType: 'json'
        // });
      });
});