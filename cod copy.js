console.log("Hi")

function calculation(){
    wv=document.getElementById('wvalue').value;
    bv=document.getElementById('bvalue').value;
    av=document.getElementById('avalue').value;

    strengthFAS=((wv*4)/392).toFixed(4);
    VolumeFAS=(bv-av).toFixed(4);
    strengthWW=((VolumeFAS*strengthFAS)/25).toFixed(3);
    codWW=(strengthWW*8).toFixed(3);
    codWW=codWW*1000
    console.log(wv,bv,av,strengthFAS,VolumeFAS,strengthWW,codWW)
    document.getElementById('res1').innerHTML="Strength of standard FAS solution is "+strengthFAS+"N";
    document.getElementById('res2').innerHTML="Volume of Standard FAS consumed By the Water sample is "+VolumeFAS+"ml";
    document.getElementById('res3').innerHTML="Strength of Waste Water sample is "+strengthWW+"N";
    document.getElementById('res4').innerHTML="Chemical Oxygen Demand of the Waste Water sample is "+codWW+"mg/liter";


    
}