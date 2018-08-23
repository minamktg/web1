var links = {
  setColor : function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    //    console.log(alist[i]);
    //     alist[i].style.color= color;
    //      i++;
    //    }
    $('a').css('color',color);
  }
}
var Body = {
  setColor : function(color){
    $('body').css('color',color);
  },
  setGroundColor : function(color){
    $('body').css('backgroundColor',color);
  }

}
function nightdayhandler(self){
  var target = document.querySelector('body');
    if(self.value === '밤'){
      Body.setGroundColor('black')
      Body.setColor('white')
      self.value = '낮'
      links.setColor('YELLOW')
    }else{
      Body.setGroundColor('white')
      Body.setColor('black')
      self.value = '밤'
      links.setColor('blue')
   }
}
