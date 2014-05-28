
	var barre={},span_percentage={},mon_interval={},compte={},k;
	for(i=0;i<5;i++){		
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
for(i=0;i<5;i++){
if(i==0){k=4}
else if(i==1){k=6}
else if(i==2){k=3}
else if(i==3){k=5}
else if(i==4){k=3.8}
compteur(i,k*10);
}
