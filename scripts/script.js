
// Truncate text
String.prototype.trunc = function(n) {
  return this.substr(0, n - 1) + (this.length > n ? '&hellip;' : '');
};

var progress = 20;

function progressUp() {
  progress = progress + 20;

  if (progress <= 100) {
     $('.fill').css('height', progress + '%');
  }
}

// On Window Load
window.onload = function() {
  $('.fill').css('height', '80%');
};