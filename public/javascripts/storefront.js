$(document).ready(function(){
  $("#addToCart").submit(event => {
    event.preventDefault();
    
    $.ajax({
      type: "POST",
      url: "/product/addToCart",
      data: $("#addToCart").serialize(),
      success: (data, status) => {
        console.log(data);
        console.log("\nStatus: " + status);
      },
      dataType: 'json'
    });
  });
});