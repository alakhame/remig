		function addEvent(event,element,fun){
			
			if(addEventListener){
			element.addEventListener(event,fun,true);
			}
			
			else{
				element.attachEvent('on'+event,fun);
			}
		}
		
		
	var lire_la_suite={},div_gauche_qsnous={},div_gauche_qsnous_text={},retour={},n=1,height={};
	
	for(i=0;i<3;i++){		
		lire_la_suite[i] = document.getElementById('lire_la_suite'+(i+1)); 
        div_gauche_qsnous[i] = document.getElementById('div_gauche_qsnous'+(i+1)); 
		div_gauche_qsnous_text[i] = document.getElementById('div_gauche_qsnous_text'+(i+1)); 
		retour[i]=document.getElementById('retour'+(i+1)); 
		 
		height[i]=div_gauche_qsnous_text[i].offsetHeight;
		
		div_gauche_qsnous_text[i].style.height  = "80px";
		}

	var num_prec=0;	
		myFunctionaffichertext = function(e){
			num=parseInt(e.target.id.charAt(e.target.id.length-1))-1;
			for(i=0;i<3;i++){				
			div_gauche_qsnous[i].style.display="none";
			}
			div_gauche_qsnous[num].style.display="block";
			div_gauche_qsnous[num].style.marginTop="20px";
			div_gauche_qsnous_text[num].style.transition = "height 0.6s ease  0s";
		    div_gauche_qsnous_text[num].style.height  = height[num]+"px"; 
			lire_la_suite[num].style.display="none";
			retour[num].style.display="block";
			};
		myFunctionaffichertoustext = function(e){
			for(i=0;i<3;i++){				
			div_gauche_qsnous[i].style.display="block";
			div_gauche_qsnous[i].style.marginTop="20px";
			div_gauche_qsnous_text[i].style.transition = "height 0.6s ease  0s";
		    div_gauche_qsnous_text[i].style.height  = "80px"; 
			lire_la_suite[i].style.display="block";
			retour[num].style.display="none";
			}
			div_gauche_qsnous[0].style.marginTop="20px";
			};
		
		
		for(i=0;i<3;i++){
			addEvent('click',lire_la_suite[i],myFunctionaffichertext);
			addEvent('click',retour[i],myFunctionaffichertoustext);
			
			};