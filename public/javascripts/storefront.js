$(document).ready(function(){
  $("#addToCart").submit(event => {
    event.preventDefault();   // Prevent form send data
    
    $.ajax({
      type: "POST",
      url: "/cart/add",
      data: $("#addToCart").serialize(),
      success: (data) => {
        $("#cartBadge").text(data.totalCartItems);
        alert(data.message)
      },
      dataType: 'json'
    });
  });

  $("#deleteCartItem").click(event => {
    console.log();
    $.ajax({
      type: "DELETE",
      url: "/cart/delete?cartId=" + $("#deleteCartItem").attr("cartid"),
      success: (data) => {
        console.log(data.cartData);
      },
      dataType: 'json'
    });
  })
});