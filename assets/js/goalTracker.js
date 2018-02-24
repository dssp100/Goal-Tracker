//Color circles



$("li").click(function(){
  $(this).find('div').toggleClass("completed");
  // if($(this).css("color") === "rgb(128, 128, 128)")
  //   {
  //   $(this).css("color", "Black")
  //   }
  //   else
  //     {
  //       $(this).css("color", "gray")
  //     }
});
