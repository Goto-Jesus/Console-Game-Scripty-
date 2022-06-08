function change(_id,_string){
    document.getElementById(_id).innerHTML=_string;
}
//*
//ANIMATION------------------------------------------------//
var RunR = ["   ,,,: \n  (o.o) \nГ(___)v \n .-' \\. ",
            "   ,,:; \n  (O.o) \n<(___)V \n .> 1.  ",
            "   ,;;, \n  (0.O) \n/(___)i.\n  \\.}   ",
            "   .,,, \n  (o.0) \n1(___)l \n  1.-'  ",
            "   ,,,, \n  (o.o) \n<(___)\\ \n  }.>   "
            ];
var RunL = [" :...   \n (o.o)  \n v(___)7\n ./ '-. ",
            " ;:..   \n (o.O)  \n V(___)>\n  .j <. ",
            " .::.   \n (O.0)  \n.J(___)\\\n   {./  ",
            " ...,   \n (0.o)  \n j(___)l\n  '-.l  ",
            " ....   \n (o.o)  \n /(___)>\n   <.{  "
            ];

var DeadR = "  ,,,,  \n (x.x)  \n-(<font color =white>=</font><font color =red>#</font><font color =white>=</font>)- \n ./ \\.  ";
var DeadL = " ....   \n (x.x)  \n-(<font color =white>=</font><font color =red>#</font><font color =white>=</font>)- \n ./ \\.  ";
var JumpR = "  ,,,,  \n\\(o.o)/ \n (___)  \n .>.>   ";
var JumpR1 = "  ,,,,  \n_(o.o)_ \n (___)  \n .>.>   ";
var JumpR2 = "  ,,,,  \n (o.o)  \n/(___)\\ \n .>.>   ";
var JumpL = " ....   \n\\(o.o)/ \n (___)  \n  <.<.  ";    
var JumpL1 = " ....   \n_(o.o)_ \n (___)  \n  <.<.  ";    
var JumpL2 = " ....   \n (o.o)  \n/(___)\\ \n  <.<.  ";    
var CrouchR="  ,,,,  \n (o.o)  \n<(___)> \n ~'~'   ";   
var CrouchR1="  ,,,,  \n (o.o)_ \n/(___)  \n ~'~'   ";   
var CrouchR2="  ,,,,  \n_(o.o)> \n (___)  \n ~'~'   ";   
var CrouchL=" ....   \n (o.o)  \n<(___)> \n  '~'~  "; 
var IdleR = "  ,,,,  \n (o.o)  \n/(___)\\ \n  l.l.  ";
var IdleL = " ....   \n (o.o)  \n/(___)\\ \n .1.1   ";
//---------------------------------------------------------//
//*/

var MisterJS =[
`
╔═—————————————————═╗
│LEVEL-UP WELL DONE!│
╚═—————————————————═╝

// _██_ \\\\  
\\\\_['']_//  
<\\_JS_/>   
|__|     
\\_/     
[]¯[]    
<| |>    
[] []    
<=' '=>   `,
`
╔═—————————————————═╗
│LEVeL-Up WeLL DONe!│
╚═—————————————————═╝

_██_     
_   _['']_   _
\\\\//\\_JS_/\\\\//
\\/  |__|  \\/ 
\\_/     
[]¯[]    
<| |>    
[]  []    
<='  '=>   `,
`
╔═—————————————————═╗
│LEvEL-uP WElL dONE!│
╚═—————————————————═╝

_██_     
_['']_    
_ //\\_JS_/\\\\ _
\\\\/  |__|  \\//
¯   \\_/    ¯ 
[]¯[]    
<| |>    
[]   []    
<='   '=>   `,
`
╔═—————————————————═╗
│lEVEL-UP wELL DONE!│
╚═—————————————————═╝

_██_     
_['']_    
<\\_JS_/>   
// |__| \\\\  
\\\\ \\_/ //  
¯[]¯[] ¯   
<| |>    
[] []    
<=' '=>   `
];

var nowframe = 0;
let reverse;
var loop;
function AnimationPoint(_id,animString)
{
    
    change(_id,animString[nowframe]);
    if(!loop){
        if(nowframe == animString.length-1 && !reverse)
        {
            reverse = true;
        }else if(nowframe == 0 && reverse)
        {
            reverse = false;
        }
        
        if(reverse)
        {
            nowframe--;
        }else{
            nowframe++;
        }
    }else{
        nowframe++;
            if(nowframe == animString.length)
            {
                nowframe = 0;
            }
            
    }
    
}


var _horizontal = "";
var _vertival = "";
var interval = 30;
var animFrame = 0;
let speedAnim = 0;

let stepLimit = 95;
var FacingDirection = true; // true = right; // false = left;

function AnimationScripty(_id)
{
var IdleR = [
`${_vertival}
${_horizontal}  ,,,,  
${_horizontal} (o.o)  
${_horizontal}/(___)\\ 
${_horizontal}  l.l.  `
];

var IdleL = [
`${_vertival}
${_horizontal} ....   
${_horizontal} (o.o)  
${_horizontal}/(___)\\ 
${_horizontal} .1.1   `
];


var RunRR = [
`${_vertival}
${_horizontal}   ,,,: 
${_horizontal}  (o.o) 
${_horizontal}Г(___)v 
${_horizontal} .-' \\. `,
`${_vertival}
${_horizontal}   ,,:; 
${_horizontal}  (O.o) 
${_horizontal}<(___)V 
${_horizontal} .> 1.  `,
`${_vertival}
${_horizontal}   ,;;, 
${_horizontal}  (0.O) 
${_horizontal}/(___)i.
${_horizontal}  \\.}   `,
`${_vertival}
${_horizontal}   .,,, 
${_horizontal}  (o.0) 
${_horizontal}1(___)l 
${_horizontal}  1.-'  `,
`${_vertival}
${_horizontal}   ,,,, 
${_horizontal}  (o.o) 
${_horizontal}<(___)\\ 
${_horizontal}  }.>   `
];

var RunLL = [
`${_vertival}
${_horizontal} :...   
${_horizontal} (o.o)  
${_horizontal} v(___)7
${_horizontal} ./ '-. `,
`${_vertival}
${_horizontal} ;:..   
${_horizontal} (o.O)  
${_horizontal} V(___)>
${_horizontal}  .j <. `,
`${_vertival}
${_horizontal} .::.   
${_horizontal} (O.0)  
${_horizontal}.J(___)\\
${_horizontal}   {./  `,
`${_vertival}
${_horizontal} ...,   
${_horizontal} (0.o)  
${_horizontal} j(___)l
${_horizontal}  '-.l  `,
`${_vertival}
${_horizontal} ....   
${_horizontal} (o.o)  
${_horizontal} /(___)>
${_horizontal}   <.{  `
];

    if(moveVertical!=0||moveHorizontal!=0){
        if(FacingDirection)
        {
            change(_id,"\n" + RunRR[speedAnim]);		//show animation right
        }else{
            change(_id,"\n" + RunLL[speedAnim]);		//show animation left
        }
    }else{
        if(FacingDirection)
        {
            change(_id,"\n" + IdleR);		//show animation right
        }else{
            change(_id,"\n" + IdleL);		//show animation left
        }
    }

    if(moveHorizontal===1){	
        FacingDirection=true;
        if(_horizontal.length<=stepLimit){
        _horizontal = _horizontal + " ";            //move right
        }
        
    }else if(moveHorizontal===-1){
        FacingDirection=false;				
        _horizontal = _horizontal.substring(1);		//move left
    }

    if(animFrame%3)
    {
        if(moveVertical===1)
        {
            _vertival = _vertival.substring(1);         //move up
        }else if(moveVertical ===-1){
            _vertival = _vertival + "\n"				//move down
        }
    }

    //animation state
    animFrame++;
    if(animFrame%=2)
    {
        speedAnim++;
    }

    if(speedAnim == RunR.length)
    {
        speedAnim = 0;
        
    }
}

let moveHorizontal = 0;
let moveVertical = 0;

function Controller(){
        // Управление
        let moveUp = 'KeyW';
        let moveDown = 'KeyS';
        let moveLeft = 'KeyA';
        let moveRight = 'KeyD';
        //const log = document.getElementById('log');
        //keydown keyup keypress
        document.addEventListener('keydown', _downKey); 
        document.addEventListener('keyup', _upKey);

        function _downKey(e) {
            if(e.code=== moveUp){
                moveVertical = 1;
            }
            if(e.code=== moveDown){
                moveVertical = -1;
            }
            if(e.code=== moveLeft){
                moveHorizontal = -1;
            }
            if(e.code=== moveRight){
                moveHorizontal = 1;
            }
        }
       
        function _upKey(e) {
            if(e.code=== moveUp || e.code=== moveDown){
                moveVertical = 0;
            }
            if(e.code=== moveLeft || e.code=== moveRight){
                moveHorizontal = 0;
            }

        }
}


function Update(){
    setTimeout(function()
    {	
        //ShowFrames();
        AnimationScripty("GameScreen");
        //AnimationPoint("point",MisterJS);
        Update();
    },interval);
}

Controller();
Update();