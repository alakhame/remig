
function addEvent(event,element,fun){
			
			if(addEventListener){
			element.addEventListener(event,fun,true);
			}
			
			else{
				element.attachEvent('on'+event,fun);
			}
		}

		var case_liste={},titre_liste_etudiant={},informer={},icone={},j,n=1,div_droite,trai={};
		
	div_droite=document.getElementById('div_droite'); 
	for(i=0;i<10;i++){		
		case_liste[i] = document.getElementById('case_liste_'+(i+1)); 
        icone[i] = document.getElementById('icone_'+(i+1));
  		titre_liste_etudiant[i] = document.getElementById('titre_liste'+(i+1));
		informer[i] = document.getElementById('informer'+(i+1));
		trai[i] = document.getElementById('trai_'+(i+1));
		}
	var num_prec=0;	
		myFunctionOn = function(e){
			
			
		
		
		for(num_prec=0;num_prec<10;num_prec++){	
			case_liste[num_prec].style.transition = "background 0.6s ease  0s";
		    case_liste[num_prec].style.background = "transparent"; 
			informer[num_prec].style.transition = "background 0.6s ease  0s";
		    informer[num_prec].style.background = "rgb(100,100,100)"; 
			titre_liste_etudiant[num_prec].style.transition = "color 0.6s ease  0s";
		    titre_liste_etudiant[num_prec].style.color = "rgb(100,100,100)";
			icone[num_prec].style.transition = "opacity 0.6s ease  0s";
		    icone[num_prec].style.opacity = "0.7"; 
			trai[num_prec].style.transition = "background 0.6s ease  0s";
		    trai[num_prec].style.background= "transparent";
			}
			
			num=parseInt(e.target.id.charAt(e.target.id.length-1))-1;
			if(num==-1){num=9};
			case_liste[num].style.transition = "background 0.6s ease  0s";
		    case_liste[num].style.background = "rgb(245,245,245)"; 
		    informer[num].style.transition = "background 0.6s ease  0s";
		    informer[num].style.background = "red"; 
			titre_liste_etudiant[num].style.transition = "color 0.6s ease  0s";
		    titre_liste_etudiant[num].style.color = "#FF6600"; 
			icone[num].style.transition ="opacity 0.6s ease  0s";
		    icone[num].style.opacity='1';
			trai[num].style.transition = "background 0.6s ease  0s";
		    trai[num].style.background= "#FF6600";
			};
		
		
		
		for(i=0;i<10;i++){
			addEvent('click',case_liste[i],myFunctionOn);
			};
			
			
