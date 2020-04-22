$(document).ready(function(){
  // Trigger on 1 element
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

  // Trigger on multiple elements
  $(document).on('click', "#deleteCartItem" , function(){
    var cartid = $(this).attr("cartid");
    $.ajax({
      type: "DELETE",
      url: "/cart/delete?cartId=" + cartid,
      success: (data) => {
        if(data.success) {
          $(`#${cartid}`).remove();;
          $("#cartBadge").text(data.totalCartItems);
          $("#cartTotal").text(data.cartTotal);
          if(!data.totalCartItems) $(".card-body").prepend("<p>There is no product in your cart.</p>")
        }
      },
      dataType: 'json'
    });
  });
});

