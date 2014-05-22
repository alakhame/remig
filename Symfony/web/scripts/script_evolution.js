
	var barre={},span_percentage={},mon_interval={},compte={};
	for(i=0;i<7;i++){		
	barre[i] = document.getElementById('bar_'+(i+1)); 
    span_percentage[i] = document.getElementById('span_percentage_'+(i+1)); 
	compte[i] = 0;	}	 

function compteur(i,val) {
	if(compte[i]<(val*4))
	{compte[i] += 1;
	barre[i].style.width=(compte[i])+"px";
	span_percentage[i].innerHTML=Math.round(compte[i]/4)+"";
	
	setTimeout(function(){compteur(i,val)}, 1);
	}
}
for(i=0;i<7;i++){
compteur(i,(i+1)*10);
}
