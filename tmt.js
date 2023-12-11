console.log("Hi")

function calculation(){
    wv=document.getElementById('wvalue').value;
    rv=document.getElementById('rvalue').value;
    vv=document.getElementById('vvalue').value;
    if (wv,rv,vv==0){
        document.getElementById('res1').innerHTML="Enter the correct value";
    }
    else{
    strengthPotChro=((wv*4)/49.03).toFixed(4)
    range=rv;
    strengthTMT=((vv*strengthPotChro)/25).toFixed(4);
    weight=(strengthTMT*55.85).toFixed(4);
    
    
    document.getElementById('res1').innerHTML="Strength of standard Potassium Dichromate solution is ";
    document.getElementById('resglow1').innerHTML=strengthPotChro+"N";
    document.getElementById('res2').innerHTML="Range of the solution ";
    document.getElementById('resglow2').innerHTML=range+"ml";
    document.getElementById('res3').innerHTML="Strength of TMT bar solution is ";
    document.getElementById('resglow3').innerHTML=strengthTMT+"N";
    document.getElementById('res4').innerHTML="Weight of Iron per liter of TMT bar solution is ";
    document.getElementById('resglow4').innerHTML=weight+"g/liter";
    }
    
}