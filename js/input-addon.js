var markMap=[];
var percMap=[];

$( document ).ready(function() {
  $('.result').addClass('hidden');
  $('.error').addClass('hidden');
  $('.equal-inputs').addClass('hidden');

  let i = 0;
  while(i<5){
    $('#data').append('<div class="col-xs-3"><input type="text" class="form-control mark" name="mark" placeholder="0 - 100"></div><div class="col-xs-3"><input type="text" id="perc" class="form-control pc" name="pc" placeholder="%"></div><div class="col-xs-6"><input type="text" class="form-control tag" name="ref" placeholder=""></div></div>');
    $('.form-control').css('animation','none'); //remove animation (only works when Add Another is clicked)
    i+=1;
  }
});

$(function(){
  var totalMark = 0;
  var totalPerc = 0;
  var numInputs = 0;


  $(function(){
    var totalMark = 0;
    var totalPerc = 0;
    var numInputs = 0;


    $('body').keypress(function() {
      if (event.which == 13) {
      callback();
    }

  });
    $('body').on('click','#calc',function(){
      callback();
    });

    var callback = function(){
    $('.result').addClass('hidden');
    $('.error').addClass('hidden');
    $('.equal-inputs').addClass('hidden');

    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 1000);

    $('.form-control.mark').each(function(){
      var mark= $(this).val();

      if(mark>0){
        totalMark += parseInt(mark);
        markMap.push(mark);
      }
    });

      $('.form-control.pc').each(function(){
        var perc=$(this).val();
        if(perc>0){
          totalPerc += parseInt(perc);
          percMap.push(perc);
        }
        if(perc!=0){ //Number of non-empty inputs
        numInputs += 1;
      }
    });

    var markLength= markMap.length;
    var percLenght = percMap.length;

    if (markLength != percLenght){ //error when inputs are not equal
      $('.equal-inputs').removeClass('hidden').addClass('visible');
      markMap=[];
      percMap=[];
      totalPerc=0;
      totalMark=0;
      numInputs=0;
      return false;
    }
      if(numInputs*100 == totalPerc){
          var overFlownMark = (totalMark / totalPerc)*100;
          overFlownMark = overFlownMark.toFixed(2);
          document.getElementById('res').innerHTML = overFlownMark;
          markMap=[];
          percMap=[];
          totalPerc=0;
          totalMark=0;
          numInputs=0;
          if($('.result').hasClass('hidden')){
            $('.result').removeClass('hidden').addClass('visible');
          }
        }
        else if(!(numInputs*100 == totalPerc) && totalPerc>100){
          markMap=[];
          percMap=[];
          totalPerc=0;
          totalMark=0;
          numInputs=0;
          $('.error').removeClass('hidden').addClass('visible');
          return false;
        }

      else{
        var i=0;
        var firstMark= (percMap[0]*markMap[0]/100);
        var marks=0;
        while(i<markLength){
          if (i==1){
            marks = firstMark + (percMap[i]*markMap[i]/100); // calculate first and second marks only once
          }
          else{
            marks = marks + (percMap[i]*markMap[i]/100); // continue calculations until loop is done
          }
          i++
        }
          marks = marks.toFixed(2); //max 2 deciaml places
          markMap=[]; // empty mark array
          percMap=[]; // empty percentage array
          totalMark=0;
          totalPerc=0;
          numInputs=0;
          document.getElementById('res').innerHTML = marks; //show result on HTML

          if($('.result').hasClass('hidden')){
            $('.result').removeClass('hidden').addClass('visible');
          }
      }
  };
  });
});

$('body').on('click','#add', function (){
  $('#data').append('<div class="col-xs-3"><input type="text" class="form-control mark" name="mark" placeholder="0 - 100"></div><div class="col-xs-3"><input type="text" class="form-control pc" name="pc" placeholder="%"></div><div class="col-xs-6"><input type="text" class="form-control tag" name="ref" placeholder=""></div></div>');
});

$('body').on('click','#reset', function(){
  document.getElementById('data').reset();
});
