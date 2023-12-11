console.log("Hi")

function calculation(){
    wv=document.getElementById('wvalue').value;
    bv=document.getElementById('bvalue').value;
    av=document.getElementById('avalue').value;
if(wv,bv,av==0){
    document.getElementById('res1').innerHTML="Values cannot be zero";
}
else{

    strengthFAS=((wv*4)/392).toFixed(4);
    VolumeFAS=(bv-av).toFixed(4);
    strengthWW=((VolumeFAS*strengthFAS)/25).toFixed(3);
    codWW=(strengthWW*8).toFixed(3);
    codWW=codWW*1000
    console.log(wv,bv,av,strengthFAS,VolumeFAS,strengthWW,codWW)
    document.getElementById('res1').innerHTML="Strength of standard FAS solution is ";
    document.getElementById('resglow1').innerHTML=strengthFAS+"N";
    document.getElementById('res2').innerHTML="Volume of Standard FAS consumed By the Water sample is ";
    document.getElementById('resglow2').innerHTML=VolumeFAS+"ml";
    document.getElementById('res3').innerHTML="Strength of Waste Water sample is ";
    document.getElementById('resglow3').innerHTML=strengthWW+"N";
    document.getElementById('res4').innerHTML="Chemical Oxygen Demand of the Waste Water sample is ";
    document.getElementById('resglow4').innerHTML=codWW+"mg/liter";
}
    
}