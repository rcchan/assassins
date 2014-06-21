$(document).ready(function() {
  setMinSectionHeights();
  stickyHeader();
});

/**
 * Sticks the header to the top of the page when scrolling.
 */
$(document).scroll(function() {
  var documentScrollTop = $(document).scrollTop();
  if (documentScrollTop > 64) {
    $('header').addClass('sticky');
    $('main').css('padding-top', '128px');
  }
  else if ($('header').hasClass('sticky')) {
    $('header').removeClass('sticky');
    $('main').css('padding-top', '0px');
  }
});

/**
 * Sets the minimum heights of sections
 */
function setMinSectionHeights() {
  var minSectionHeight = $('body').height() - $('header').height();
  $('main section').css('min-height', minSectionHeight + 'px');
}
