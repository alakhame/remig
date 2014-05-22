var case_liste={},titre_liste_etudiant={},informer={},icone={},j,n=1;
	
	for(i=0;i<3;i++){		
		case_liste[i] = document.getElementById('case_liste_'+(i+1)); 
        icone[i] = document.getElementById('icone_'+(i+1));
  		titre_liste_etudiant[i] = document.getElementById('titre_liste_etudiant'+(i+1));
		informer[i] = document.getElementById('informer'+(i+1));
		}
	var num_prec=0;	
		myFunctionOn = function(e){
			num=parseInt(e.target.id.charAt(e.target.id.length-1))-1;
			case_liste[num].style.transition = "background 0.6s ease  0s";
		    case_liste[num].style.background = "#FFE484"; 
		    informer[num].style.transition = "background 0.6s ease  0s";
		    informer[num].style.background = "red"; 
			titre_liste_etudiant[num].style.transition = "color 0.6s ease  0s";
		    titre_liste_etudiant[num].style.color = "rgb(29,29,29)"; 
			icone[num].style.transition ="opacity 0.6s ease  0s";
		    icone[num].style.opacity='1'; 
			
		if(num_prec!=num)	{	
			case_liste[num_prec].style.transition = "background 0.6s ease  0s";
		    case_liste[num_prec].style.background = ""; 
			informer[num_prec].style.transition = "background 0.6s ease  0s";
		    informer[num_prec].style.background = "rgb(100,100,100)"; 
			titre_liste_etudiant[num_prec].style.transition = "color 0.6s ease  0s";
		    titre_liste_etudiant[num_prec].style.color = "rgb(100,100,100)";
			icone[num_prec].style.transition = "opacity 0.6s ease  0s";
		    icone[num_prec].style.opacity = "0.7"; 
			num_prec=num;}
			};
		
		myFunctionOff = function(e){
			
		};
		
		
		for(i=0;i<3;i++){
			addEvent('click',case_liste[i],myFunctionOn);
			
			};