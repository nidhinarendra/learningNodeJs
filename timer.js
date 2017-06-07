//Display the timer

var time = 0;

var timer = setInterval(function(){
  console.log(time + ' times');
  time += 2;
  if(time > 5){
    clearInterval(timer);
  }
},2000);
