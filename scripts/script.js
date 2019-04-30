
// Truncate text
String.prototype.trunc = function(n) {
  return this.substr(0, n - 1) + (this.length > n ? '&hellip;' : '');
};

var progress = 20;
var shouldShowSpinner = true;

$(window).scroll(function() {
    if(shouldShowSpinner && $(window).scrollTop() == $(document).height() - $(window).height()) {
      setTimeout(() => {
        $('.spinner').addClass('show');
        setTimeout(() => {
          $('.onload').fadeIn('slow');
          $('.spinner').removeClass('show');
          shouldShowSpinner = false;        
        }, 1100);
      })
    }
});
