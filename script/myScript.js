$('#leftMenu').ready(function(){

  


$("#btn_show_lefNav").on({

click:function(){

    let m=$(document).width();

  $(this).hide(0,function(){

    $('#leftMenu').animate({

        width:'+25%',
        
     },100);
     $('#home-content').animate({
  
      'padding-left':"+50px"
     },500);
     
     $('#btn_close_lefNav').removeClass('d-none')
     $('#btn_close_lefNav').addClass('d-inline-block');
     $(this).removeClass('d-inline-block');
$(this).addClass('d-none');


  });

 
}

})

$('#btn_close_lefNav').click(function(){

    let m=$(document).width();
    $('#home-content').animate({

        'padding-left':"-50px"
                 },500);


                $('#leftMenu').animate({

                    width:`0px`
                 },100);
            
                 $('#btn_show_lefNav').removeClass('d-none')
                 $('#btn_show_lefNav').addClass('d-inline-block');
                 $(this).removeClass('d-inline-block');
            $(this).addClass('d-none');
    
    
})


/// slider 
$('#sliderDown h3').click(function(){
$(this).next('.inner').slideDown();
$(this).next('.inner').nextAll('.inner').slideUp();
$(this).next('.inner').prevAll('.inner').slideUp()
})
// count 

const nowDate=new Date();
const partyDate=new Date();
partyDate.setFullYear(nowDate.getFullYear()+2,nowDate.getMonth()+5,nowDate.getDate());
partyDate.setHours(nowDate.getHours()+10);
partyDate.setMinutes(nowDate.getMinutes()+5);
partyDate.setSeconds(nowDate.getSeconds()+10)
const x =(partyDate-nowDate);



const ss= 1000;
const  mm=60*ss;
const hh=60*mm;
const dd=24*hh;

let days=Math.trunc( x/dd)
let hours=Math.trunc( (x%dd)/(hh))
let minutes   =Math.trunc(((x%dd)%(hh))/mm) 
let seconds   =Math.trunc((((x%dd)%(hh))%mm)/ss) 

/* alert(`days = ${days} hours =${hours} min=${mins}
sec =${sec}
` 
) */




//$('.seconds').text(`${seconds} s`);

setInterval(countDown, 1000);
function countDown()
{

    if(seconds>=1)
    {
        seconds-=1;
    }
    else
    {
        seconds=59;
        if(minutes>=1)
        {
            minutes-=1;
        }
        else
        {
            minutes=59;
            if(hours>=1)
            {
                hours-=1;
            }
            else
            {
                hours=23;
                days-=1;
            }
        }
    }
    $('.seconds').text(`${seconds} s`);
    $('.minutes').text(`${minutes} m`);
    $('.hours').text(`${hours} H`);
    $('.days').text(`-${days} D`);
}


})


document.querySelector('textarea').addEventListener ('input',function(){
    let len=100 - this.value.length;
    if(len>0)
    {
     
     document.querySelector('#chars').innerHTML=(`${len}`)
    }
  
})



