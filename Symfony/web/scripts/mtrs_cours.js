function addEvent(event,element,fun){
			
			if(addEventListener){
			element.addEventListener(event,fun,true);
			}
			
			else{
				element.attachEvent('on'+event,fun);
			}
		}
		
var mat={},triangle={};
	
	for(i=0;i<=3;i++){		
		mat[i] = document.getElementById('nom_matiere_'+(i)); 
        triangle[i]=document.getElementById('triangle_'+(i)); 
		}
	
		var num_prec=0,num=0;	
		myFunctionOn = function(e){
			num=parseInt(e.target.id.charAt(e.target.id.length-1));
		
		
		if(num==0){	
		document.getElementById('titre_cours').style.transition = "color 0.9s ease  0s";
		document.getElementById('titre_cours').style.background = "#38B1CC"; 
		mat[num].style.border = "1px solid #38B1CC";  
		document.getElementById('titre_cours').style.color = "white"; 
			mat[num].style.transition = "background 0.9s ease  0s";
			document.getElementById('cours').style.transition = "border 0.9s ease  0s";
			triangle[num].style.transition = "opacity 0.9s ease  0s";
			triangle[num].style.opacity = "1";
		    document.getElementById('cours').style.border = "1px solid #38B1CC";
		    mat[num].style.background = "#38B1CC";
			mat[num].style.transition = "color 0.9s ease  0s";
		    mat[num].style.color = "white";
			
			if(num!=num_prec){
			triangle[num_prec].style.transition = "opacity 0.9s ease  0s";
			triangle[num_prec].style.opacity = "0";
			mat[num_prec].style.transition = "background 0.9s ease  0s";
		    mat[num_prec].style.background = "";
			mat[num_prec].style.border= "1px solid rgb(150,150,150)";
			mat[num].style.transition = "color 0.9s ease  0s";
		    mat[num_prec].style.color =  "rgb(150,150,150)";
			num_prec=num;}
			
		}
		if(num==1){	document.getElementById('titre_cours').style.transition = "color 0.9s ease  0s";
		    document.getElementById('titre_cours').style.background = "#E44C41"; 
			mat[num].style.border = "1px solid #E44C41"; 
			document.getElementById('titre_cours').style.color = "white"; 
			mat[num].style.transition = "background 0.9s ease  0s";
			document.getElementById('cours').style.transition = "border 0.9s ease  0s";
			triangle[num].style.transition = "opacity 0.9s ease  0s";
			triangle[num].style.opacity = "1";
		    document.getElementById('cours').style.border = "1px solid #E44C41";
		    mat[num].style.background = "#E44C41";
			mat[num].style.transition = "color 0.9s ease  0s";
		    mat[num].style.color = "white";
			
			if(num!=num_prec){
			triangle[num_prec].style.transition = "opacity 0.9s ease  0s";
			triangle[num_prec].style.opacity = "0";
			mat[num_prec].style.transition = "background 0.9s ease  0s";
		    mat[num_prec].style.background = "";
			mat[num_prec].style.border= "1px solid rgb(150,150,150)";
			mat[num].style.transition = "color 0.9s ease  0s";
		    mat[num_prec].style.color =  "rgb(150,150,150)";
			num_prec=num;}
		}
		if(num==2){	document.getElementById('titre_cours').style.transition = "color 0.9s ease  0s";
		    document.getElementById('titre_cours').style.background = "#8E5D9F"; 
			mat[num].style.border = "1px solid #8E5D9F"; 
			document.getElementById('titre_cours').style.color = "white"; 
			mat[num].style.transition = "background 0.9s ease  0s";
			mat[num].style.background = "#8E5D9F";
			triangle[num].style.transition = "opacity 0.9s ease  0s";
			triangle[num].style.opacity = "1";
			document.getElementById('cours').style.transition = "border 0.9s ease  0s";
		    document.getElementById('cours').style.border = "1px solid #8E5D9F";
		   	mat[num].style.transition = "color 0.9s ease  0s";
		    mat[num].style.color = "white";
			
			if(num!=num_prec){
			triangle[num_prec].style.transition = "opacity 0.9s ease  0s";
			triangle[num_prec].style.opacity = "0";
			mat[num_prec].style.transition = "background 0.9s ease  0s";
		    mat[num_prec].style.background = "";
			mat[num_prec].style.border= "1px solid rgb(150,150,150)";
			mat[num].style.transition = "color 0.9s ease  0s";
		    mat[num_prec].style.color =  " rgb(150,150,150)";
			num_prec=num;}
		}
		if(num==3){	document.getElementById('titre_cours').style.transition = "color 0.9s ease  0s";
		    document.getElementById('titre_cours').style.background = "#EFC32F"; 
			mat[num].style.border = "1px solid #EFC32F"; 
			document.getElementById('titre_cours').style.color = "white"; 
			document.getElementById('cours').style.transition = "border 0.9s ease  0s";
		    document.getElementById('cours').style.border = "1px solid #EFC32F";
			triangle[num].style.transition = "opacity 0.9s ease  0s";
			triangle[num].style.opacity = "1";
			mat[num].style.transition = "background 0.9s ease  0s";
		    mat[num].style.background = "#EFC32F";
			mat[num].style.transition = "color 0.9s ease  0s";
		    mat[num].style.color = "white";
			document.getElementById('cours').style.textAlign = "center"; 
			
			
			if(num!=num_prec){
			triangle[num_prec].style.transition = "opacity 0.9s ease  0s";
			triangle[num_prec].style.opacity = "0";
			mat[num_prec].style.transition = "background 0.9s ease  0s";
		    mat[num_prec].style.background = "";
			mat[num_prec].style.border= "1px solid rgb(150,150,150)";
			mat[num_prec].style.transition = "color 0.9s ease  0s";
		    mat[num_prec].style.color =  " rgb(150,150,150)";
			num_prec=num;}
		}
		};
		
		for(i=0;i<=3;i++){
			addEvent('click',mat[i],myFunctionOn);
			
			};
