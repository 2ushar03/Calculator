const inputval=document.getElementById("check");
function perform(val){
    inputval.value=inputval.value+val;
}

function clearinput(){
    inputval.value=" ";
}
//BODMAS
function solve(){
    let val=inputval.value;
    let ans;
    if(val.includes('/')){
        var n=val.split('/');
        var v1=parseFloat(n[0]);
        var v2=parseFloat(n[1]);
        if(v2==0)
            ans="ERROR";
        else
            ans=v1/v2;
    }
    else if(val.includes('*')){
        var n=val.split('*');
        var v1=parseFloat(n[0]);
        var v2=parseFloat(n[1]);
        ans=v1*v2;
    }
    else if(val.includes('+')){
        var n=val.split('+');
        var v1=parseFloat(n[0]);
        var v2=parseFloat(n[1]);
        ans=v1+v2;
    }
    else if(val.includes('-')){
        var n=val.split('-');
        var v1=parseFloat(n[0]);
        var v2=parseFloat(n[1]);
        ans=v1-v2;
    }
    else{
        ans="Error";
    }
    inputval.value=ans;
}