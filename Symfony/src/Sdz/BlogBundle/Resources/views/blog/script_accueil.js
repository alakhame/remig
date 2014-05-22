		function addEvent(event,element,fun){
			
			if(addEventListener){
			element.addEventListener(event,fun,true);
			}
			
			else{
				element.attachEvent('on'+event,fun);
			}
		}
var sliderimages={},clicabletext ={},fleche ={},j,n=1;
		
		clicabletext[0] = document.getElementById('clicable1_text');  
		clicabletext[1] = document.getElementById('clicable2_text');
		clicabletext[2] = document.getElementById('clicable3_text');
		clicabletext[3] = document.getElementById('clicable4_text');
			
		fleche[0] = document.getElementById('div1');  
		fleche[1] = document.getElementById('div2');
		fleche[2] = document.getElementById('div3');
		fleche[3] = document.getElementById('div4');	
		
		
		sliderimages[0] = document.getElementById('sls1');  
		sliderimages[1] = document.getElementById('sls2');
		sliderimages[2] = document.getElementById('sls3');
		sliderimages[3] = document.getElementById('sls4');
		
		
        function actualiserimage(){
		document.getElementById('division_slider_show_image1').style.transition = "width 0.7s ease  0s";
        document.getElementById('division_slider_show_image1').style.width = "599px";  
        /*document.getElementById('division_slider_show_image1').style.borderRight='15px solid black';*/
   
		setTimeout(function() { // On met en place l'intervalle pour afficher la progression du temps
         document.getElementById('division_slider_show_image1').style.transition = "width 0.7s ease  0s";
        document.getElementById('division_slider_show_image1').style.width = "0px"; 
       /* setTimeout(function() {document.getElementById('division_slider_show_image1').style.borderRight='0px solid black';}, 700)	*/
      	  
        }, 1100);	}	
			
			image_pré=0;
			
			
		afficherimage = function(e){
		  
	
	
	if(e.target ==fleche[0] )
	 {
	 
	 
	 
	 for(j=0;j<4;j++){	                  fleche[j].style.opacity="0.5";
					  }
	 
	 
	   
	   fleche[0].style.opacity="1";
	   n=0;
	   
	    sliderimages[image_pré].style.transition = "opacity 1.5s ease  0s";
		sliderimages[image_pré].style.opacity = "0";  
		
	    sliderimages[0].style.transition = "opacity 1.5s ease 0s";
		sliderimages[0].style.opacity = "1";  
        
		
		image_pré=0;

	 }
	 
	else if(e.target ==fleche[1]  )
	 {
	 for(j=0;j<4;j++){
	                  fleche[j].style.opacity="0.5";
 				      }
	 
	   fleche[1].style.opacity="1";
	   n=1;
	   sliderimages[image_pré].style.transition = "opacity 1.5s ease  0s";
		sliderimages[image_pré].style.opacity = "0";  
		
	    sliderimages[1].style.transition = "opacity 1.5s ease  0s";
		sliderimages[1].style.opacity = "1";  
        
		image_pré=1;}
	else if(e.target ==fleche[2] )
	 {
	 for(j=0;j<4;j++){
	                  fleche[j].style.opacity="0.5";
					  					  }
	 
	 
	   
	   fleche[2].style.opacity="1";
	   n=2;
	  sliderimages[image_pré].style.transition = "opacity 1.5s ease  0s";
		sliderimages[image_pré].style.opacity = "0";  
		
	    sliderimages[2].style.transition = "opacity 1.5s ease  0s";
		sliderimages[2].style.opacity = "1";  
        
		image_pré=2;
	  }
		
	else if(e.target ==fleche[3] )
	 {
	 for(j=0;j<4;j++){
	                  fleche[j].style.opacity="0.5";
					  }
	 
	 
	   
	   fleche[3].style.opacity="1";
	   n=3;
	   sliderimages[image_pré].style.transition = "opacity 1.5s ease  0s";
		sliderimages[image_pré].style.opacity = "0";  
		
	    sliderimages[3].style.transition = "opacity 1.5s ease  0s";
		sliderimages[3].style.opacity = "1";  
        
		image_pré=3;}
	
	}		
    
	for(j=0;j<4;j++){
					
			addEvent('click',fleche[j],afficherimage);
			
			}
			
		
	
	
	 



	 setInterval(function(){ 
	
		if(n==0)
	 {
	 for(j=0;j<4;j++){
	                  fleche[j].style.opacity="0.5";
                     }

	   fleche[0].style.opacity="1";
	    
		sliderimages[image_pré].style.transition = "opacity 1.5s ease  0s";
		sliderimages[image_pré].style.opacity = "0";  
		
	    sliderimages[n].style.transition = "opacity 1.5s ease  0s";
		sliderimages[n].style.opacity = "1";  
        
		image_pré=n;}
	 
	else if(n==1)
	 {
	 for(j=0;j<4;j++){
	                  fleche[j].style.opacity="0.5";
					  }

	   fleche[1].style.opacity="1";
	   
	   sliderimages[image_pré].style.transition = "opacity 1.5s ease  0s";
		sliderimages[image_pré].style.opacity = "0";  
		
	    sliderimages[n].style.transition = "opacity 1.5s ease  0s";
		sliderimages[n].style.opacity = "1";  
        
		image_pré=n;
		}
	else if(n==2)
	 {
	 for(j=0;j<4;j++){
	                  fleche[j].style.opacity="0.5";
					  }
	 

	   fleche[2].style.opacity="1";
	   sliderimages[image_pré].style.transition = "opacity 1.5s ease  0s";
		sliderimages[image_pré].style.opacity = "0";  
		
	    sliderimages[n].style.transition = "opacity 1.5s ease  0s";
		sliderimages[n].style.opacity = "1";  
        
		image_pré=n;
		}
	else if(n==3)
	 {
	 for(j=0;j<4;j++){
	                  fleche[j].style.opacity="0.5";
					 }

	   fleche[3].style.opacity="1";
	  sliderimages[image_pré].style.transition = "opacity 1.5s ease  0s";
		sliderimages[image_pré].style.opacity = "0";  
		
	    sliderimages[n].style.transition = "opacity 1.5s ease  0s";
		sliderimages[n].style.opacity = "1";  
        
		image_pré=n;
		}
	
		n++;
		if(n==4) n=0;
	
}		
			
   , 7000);
   
   
   
   function getScrollPosition()
{
	return Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);
}

function scroll()
{
if(getScrollPosition()[1]>=160){
document.getElementById('Entete').style.position="fixed";
document.getElementById('Entete').style.top="-160px";
}

else{

document.getElementById('Entete').style.position="absolute";
document.getElementById('Entete').style.top="0px";
}

}




