var Body = {
  alignCenter : function(center){
    $('body').css('alignCenter',center);
  }

}
function align(self){
  var target = document.querySelector('body');
  Body.alignCenter('center')
}
