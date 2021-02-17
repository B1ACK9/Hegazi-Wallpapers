


AOS.init({
   duration: 1000,
    offset: 120,
      startEvent: 'load',

    easing:'ease-in-out'
});

$(window).on('load', function() {
  AOS.refresh();
});

