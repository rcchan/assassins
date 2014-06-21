$(document).ready(function() {
  //setMinSectionHeights();
});

/**
 * Sets the minimum heights of sections
 */
function setMinSectionHeights() {
  var minSectionHeight = $('body').height() - $('header').height();
  $('main section').css('min-height', minSectionHeight + 'px');
}
