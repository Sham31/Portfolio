jQuery(document).ready(function(){
  $(document).on('click','.bubble-wrap',function(){
      $(".bubble").toggleClass("active");
      $(".bubbleback").toggleClass("active");
      $(".first").toggleClass("active");
      $(".second").toggleClass("active");
      $(".third").toggleClass("active");
      $(".heady").toggleClass("active");
      $(".navitems").toggleClass("active");
  });
});