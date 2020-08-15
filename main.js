
const wheel = document.getElementById('wheel');
const disRun = document.getElementById('runs');
const disWicket = document.getElementById('wickets');
const disMessage = document.getElementById('dis-message');

var run = 0;
var wicket = 0;
var message = null;

function r_w_m(r,w,m) {
    run += r;
    wicket += w;
    message = m;
}


function get_random_number() {
    return Math.floor(Math.random()*360);
}
var positive = true;
const posRotate = 10800;
const negRotate = -11160;
var totalRotate = null;

function rotate() {
    if (wicket<10) {
        var randomNumber = get_random_number();
    
        if (positive) {
            totalRotate = "rotate("+(posRotate + parseInt(randomNumber))+"deg)";
            positive = false;
            
        }else{
            totalRotate = "rotate("+(negRotate + parseInt(randomNumber))+"deg)";
            positive = true;
            
        }
        wheel.style.transform = totalRotate;
    
        if(0<randomNumber && randomNumber<45){
            r_w_m(3,0,"3 runs.Good understanding.");
        }else if(45<randomNumber && randomNumber<90){
            r_w_m(2,0,"Quick double!");
        }else if(90<randomNumber && randomNumber<135){
            r_w_m(0,1,"Opps! Run out!");
        }else if(135<randomNumber && randomNumber<180){
            r_w_m(1,0,"Just a single");
        }else if(180<randomNumber && randomNumber<225){
            r_w_m(4,0,"Massive! It's a boundary!");
        }else if(225<randomNumber && randomNumber<270){
            r_w_m(0,1,"What a ball! Clean bold.");
        }else if(270<randomNumber && randomNumber<315){
            r_w_m(6,0,"Phenomenal! Six Six Six..");
        }else if(315<randomNumber && randomNumber<360){
            r_w_m(0,1,"Excellent catch! Catch out.");
        }else{
            r_w_m(0,0,"Ohhw,It's a dead ball.");
        }
        disMessage.innerHTML=".....................";
        setTimeout(function() {
            if (run>1) {
                disRun.innerHTML="Runs:"+run;
            }else{
                disRun.innerHTML="Run:"+run;
            }
            if (wicket>1) {
                disWicket.innerHTML="Wickets:"+wicket;
                    
            }else{
                disWicket.innerHTML="Wicket:"+wicket;
                    
            }
            disMessage.innerHTML=message;
        }, 3000);
    }else{
        disMessage.innerHTML="<h4>All out.Start new game.</h4>";
    }
    
}
function reset() {
    run = 0;
    wicket = 0;
    disMessage.innerHTML="<h4>Tap Play button</h4>";
    disRun.innerHTML="Run:0";
    disWicket.innerHTML="Wicket:0";
}