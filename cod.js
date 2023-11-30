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
    
}