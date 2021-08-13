
$(document).ready(function(){
  $("#accordion").accordion({
    active: false,
    collapsible: true,
    heightStyle: 'content',
    icons: false,
    header: '> .accordion-item > .accordion-header',
    animate:{
      duration:800,   //  1 секунда
      easing:'easeInOutSine'
    }

  });




});
