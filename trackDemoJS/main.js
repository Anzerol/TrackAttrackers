$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

var devtools = function(){};
devtools.toString = function() {
  this.opened = true;
}

console.log('%c', devtools);