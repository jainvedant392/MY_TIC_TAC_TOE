let chance_num=0,scorex=0,scoreo=0,flagx=0,flago=0,flag=0;
let a=[0,0,0,0,0,0,0,0,0,0];
let gamecount=new Map();
for(let i=1;i<10;i++){
        gamecount.set(("a"+i),0);
}

function chance(id){
    let button=document.getElementById(id);
    if(gamecount.get(id)==0){
        if(chance_num%2==0) button.innerText="X";
        else button.innerText="O";
        chance_num++;
        gamecount.set(id,1);
    }
    a[Number(id[1])]=button.innerText;
    button.style.color="white";
    button.style.fontSize="50px";
    button.style.backgroundColor="black";
    if(chance_num>=5) result();
}

function result(){
    let r1=(a[1]==a[2] && a[1]==a[3]), r2=(a[4]==a[5] && a[5]==a[6]), r3=(a[7]==a[9] && a[8]==a[9]);
    let r4=(a[1]==a[4] && a[1]==a[7]), r5=(a[2]==a[5] && a[5]==a[8]), r6=(a[3]==a[9] && a[6]==a[9]);
    let r7=(a[1]==a[5] && a[1]==a[9]), r8=(a[3]==a[5] && a[5]==a[7]);

    if(r1 || r4 || r7){
        if(a[1]=="X"){
            scorex++; flagx=1;
            document.getElementById("scorex").innerHTML=scorex;
        }else if(a[1]=="O"){
            scoreo++; flago=1;
            document.getElementById("scoreo").innerHTML=scoreo;
        }
    }
    else if(r2 || r5 || r8){
        if(a[5]=="X"){
            scorex++; flagx=1;
            document.getElementById("scorex").innerHTML=scorex;
        }else if(a[5]=="O"){
            scoreo++; flago=1;
            document.getElementById("scoreo").innerHTML=scoreo;
        }
    }
    else if(r3 || r6){
        if(a[9]=="X"){
            scorex++; flagx=1;
            document.getElementById("scorex").innerHTML=scorex;
        }else if(a[9]=="O"){
            scoreo++; flago=1;
            document.getElementById("scoreo").innerHTML=scoreo;
        }
    }
    else if(chance_num == 9) flag=1;

    if(flagx) setTimeout(() => {alert("PLAYER X HAS WON THE GAME!! PLAY ANOTHER GAME.");}, 500);
    else if(flago) setTimeout(() => {alert("PLAYER O HAS WON THE GAME!! PLAY ANOTHER GAME.");}, 500);
    else if(flag) setTimeout(() => {alert("THE GAME HAS DRAWN, PLAY ANOTHER GAME.");}, 500);    
    
    if(flagx || flago || flag){
        chance_num=0;
        for(let i=1;i<10;i+=1){
            a[i]=0; gamecount.set(("a"+i),0);
            let block=document.getElementById(("a"+i));
            setTimeout(() => {block.innerText=0; block.style.color="lightgray"; block.style.backgroundColor="lightgray"}, 1000);
        }
        flagx=0; flago=0; flag=0; 
    }    
}