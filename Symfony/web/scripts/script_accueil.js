		function addEvent(event,element,fun){
			
			if(addEventListener){
			element.addEventListener(event,fun,true);
			}
			
			else{
				element.attachEvent('on'+event,fun);
			}
		}

$(document).ready(function (){ 
                    $('html, body').animate({
                        scrollTop: 0
                    }, 900);
					aff_opac(1);
                            });

function aff_opac(n){
document.getElementById('menu_vol').style.transition="right 0.6s ease  0s"; 
document.getElementById('menu_vol').style.right=(n-1)*157+17+"px"; 
} 

function aff_liens(){
document.getElementById('div_liens').style.transition = "right 1.3s ease  0s"; 
document.getElementById('div_liens').style.right="0%";
document.getElementById('div_qsnous').style.transition = "right 1.3s ease  0s"; 
document.getElementById('div_qsnous').style.right="100%";
document.getElementById('div_actus').style.transition = "right 1.3s ease  0s"; 
document.getElementById('div_actus').style.right="200%";
for(var i=1;i<4;i++){document.getElementById('cercle'+i).style.opacity="0.5";}
document.getElementById('cercle'+3).style.opacity="1";
} 
 
function aff_actus(){
document.getElementById('div_liens').style.transition = "right 1.3s ease  0s"; 
document.getElementById('div_liens').style.right="-200%";
document.getElementById('div_qsnous').style.transition = "right 1.3s ease  0s"; 
document.getElementById('div_qsnous').style.right="-100%";
document.getElementById('div_actus').style.transition = "right 1.3s ease  0s"; 
document.getElementById('div_actus').style.right="0%";
for(var i=1;i<4;i++){document.getElementById('cercle'+i).style.opacity="0.5";}
document.getElementById('cercle'+1).style.opacity="1";
} 
 
 
function aff_qsnous(){
document.getElementById('div_liens').style.transition = "right 1.3s ease  0s"; 
document.getElementById('div_liens').style.right="-100%";
document.getElementById('div_qsnous').style.transition = "right 1.3s ease  0s"; 
document.getElementById('div_qsnous').style.right="0%";
document.getElementById('div_actus').style.transition = "right 1.3s ease  0s"; 
document.getElementById('div_actus').style.right="100%";
for(var i=1;i<4;i++){document.getElementById('cercle'+i).style.opacity="0.5";}
document.getElementById('cercle'+2).style.opacity="1";

} 
 
function aff_scd_play(){document.getElementById('logo_image').src="/remi/Symfony/web/images/play.png";}
function aff_scd_logo(){document.getElementById('logo_image').src="/remi/Symfony/web/images/logo.png";}
 
   function getScrollPosition()
{
	return Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);
}

function scroll()
{
document.getElementById('box_g').style.opacity= (1-getScrollPosition()[1]/300)+""; 
}



function aff_barre(n){	 for(j=1;j<=4;j++){document.getElementById('menu_'+j).style.background="black"}
document.getElementById('menu_'+n).style.background="#94CE9B";
}


  $(document).ready(function (){
            $("#inscription_bnt").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#inscription").offset().top  - 58
                    }, 900);
					
                //});
            });
			
			$("#menu_a_1").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: 0
                    }, 900);
                //});
            });

            $("#menu_a_2").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#div_qsnou_liens_actus").offset().top  - 58
                    }, 900);
				
                //});
            });
 
            $("#menu_a_3").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#div_qsnou_liens_actus").offset().top  - 58
                    }, 900);
                //});
            });
			

            $("#menu_a_4").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#div_qsnou_liens_actus").offset().top  - 58
                    }, 900);
                //});
            });
			
			$("#menu_a_5").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#footer_g").offset().top  - 58
                    }, 900);
                //});
            });
	
			 $("#logo_image").click(function (){
                //$(this).animate(function(){
				$("#acc_desous").show("slow");
                               });

			 $("#video_tab_ret").click(function (){
                //$(this).animate(function(){
				$("#acc_desous").hide("slow");
                    
            });
			
            $("#scroll_haut_div").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: 0
                    }, 900);
					aff_opac(1);
                //});
            });
			 $("#sing_in").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: 0
                    }, 900);
                //});
            });			});	
			

			