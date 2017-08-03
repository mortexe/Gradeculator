var markMap=[];
var percMap=[];

$( document ).ready(function() {
  let i = 0;
  while(i<3){
    $('.row-inputs').clone().appendTo('#data');
    i+=1;
  }
});

$('body').on('click', '#calc', function(){
  $('.form-control.mark').each(function(){
    var mark= $(this).val();
    if(mark>0){
      console.log(mark);
      markMap.push(mark);
    }
  });

    $('.form-control.pc').each(function(){
      var perc=$(this).val();
      if(perc>0){
        console.log(perc);
        percMap.push(perc);
      }
  });
  var markLength= markMap.length;
  var percLenght = percMap.length;
  
  if (markLength != percLenght){
    console.log('please enter percentage')
    markMap=[];
    percMap=[];
  }
  else{
    var i=1;
    var mark;
    var mark1 = ((percMap[0]/100)*markMap[0]);
    while(i<markLength){
      if (i==1){
        mark = mark1 + ((percMap[i]/100)*markMap[i]);
      }
      else{
        mark = mark + ((percMap[i]/100)*markMap[i]);
      }
      i++
      }
      console.log(mark,'total')
      markMap=[];
      percMap=[];
    }
});


$('body').on('click','#add', function (){
  $('#data').append('<div class="col-xs-3"><input type="text" class="form-control mark" name="mark" placeholder="0 - 100"></div><div class="col-xs-3"><input type="text" class="form-control pc" name="pc" placeholder="%"></div><div class="col-xs-6"><input type="text" class="form-control tag" name="ref" placeholder=""></div></div>');
});
