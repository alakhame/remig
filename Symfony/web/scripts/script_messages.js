var toggel=new Array(0,0,0);
prec=-1;
function toggelf(i){
if(prec==-1){afficher(i);toggel[i-1]=1;prec=i}
else{
if(toggel[0]==0 && i==1){afficher(i);if(prec!=i)masquer(prec);toggel[prec-1]=0;prec=1;toggel[i-1]=1}
else if(toggel[0]==1 && i==1){masquer(i);toggel[0]=0;prec=-1;toggel[i-1]=0}
else if(toggel[1]==0 && i==2){afficher(i);if(prec!=i)masquer(prec);toggel[prec-1]=0;prec=2;toggel[i-1]=1}
else if(toggel[1]==1 && i==2){masquer(i);toggel[1]=0;prec=-1;toggel[i-1]=0}
else if(toggel[2]==0 && i==3){afficher(i);if(prec!=i)masquer(prec);toggel[prec-1]=0;prec=3;toggel[i-1]=1}
else if(toggel[2]==1 && i==3){masquer(i);toggel[2]=0;prec=-1;}
}
}

function afficher(i){
document.getElementById('message'+i).style.transition = "width 0.4s ease  0s";
document.getElementById('message'+i).style.width="620px";

setTimeout(
function(){ if(i==1){document.getElementById('message'+i).style.transition = "height 0.4s ease  0s"; 
document.getElementById('message'+i).style.height= '257px';
}

else{
document.getElementById('message'+i).style.transition = "height 0.4s ease  0s"; 
document.getElementById('message'+i).style.height= '600px';
}
},300);
document.getElementById('message_entet'+i).style.transition = "background 0.4s ease  0s";
document.getElementById('message_entet'+i).style.background="#59407F";
document.getElementById('titre_message'+i).style.transition = "color 0.4s ease  0s";
document.getElementById('titre_message'+i).style.color="white";
document.getElementById('image_messagei'+i).src="http://localhost/Symfony/web/images/fleche1.png";

}

function masquer(i){
setTimeout(function(){ document.getElementById('message'+i).style.transition = "width 0.4s ease  0s"; 
document.getElementById('message'+i).style.width="400px";},300);
document.getElementById('message'+i).style.transition = "height 0.4s ease  0s"; 
document.getElementById('message'+i).style.height="30px";
document.getElementById('message_entet'+i).style.transition = "background 0.4s ease  0s";
document.getElementById('message_entet'+i).style.background="white";
document.getElementById('titre_message'+i).style.transition = "color 0.4s ease  0s";
document.getElementById('titre_message'+i).style.color="rgb(70,70,70)";
document.getElementById('image_messagei'+i).src="http://localhost/Symfony/web/images/fleche2.png";
document.getElementById('message'+i).style.boxShadow="" 
}


function afficherlemessage_envoyer(i){
var offsetHeight = document.getElementById('contenu_message_envoyer'+i).offsetHeight+35;
document.getElementById('contenu_message_glo_envoyer'+i).style.transition = "height 0.4s ease  0s"; 
document.getElementById('contenu_message_glo_envoyer'+i).style.height=offsetHeight+"px";
document.getElementById('masquer_envoyer'+i).style.display="inline-block";
document.getElementById('afficher_envoyer'+i).style.display="none";
}

function masquerlemessage_envoyer(i){

document.getElementById('contenu_message_glo_envoyer'+i).style.transition = "height 0.4s ease  0s"; 
document.getElementById('contenu_message_glo_envoyer'+i).style.height="0px";
document.getElementById('masquer_envoyer'+i).style.display="none";
document.getElementById('afficher_envoyer'+i).style.display="inline-block";
}

function afficherlemessage_recu(i){
var offsetHeight = document.getElementById('contenu_message_recu'+i).offsetHeight+35;
document.getElementById('contenu_message_glo_recu'+i).style.transition = "height 0.4s ease  0s"; 
document.getElementById('contenu_message_glo_recu'+i).style.height=offsetHeight+"px";
document.getElementById('masquer_recu'+i).style.display="inline-block";
document.getElementById('afficher_recu'+i).style.display="none";
}

function masquerlemessage_recu(i){

document.getElementById('contenu_message_glo_recu'+i).style.transition = "height 0.4s ease  0s"; 
document.getElementById('contenu_message_glo_recu'+i).style.height="0px";
document.getElementById('masquer_recu'+i).style.display="none";
document.getElementById('afficher_recu'+i).style.display="inline-block";
}

function effacer_env(n){
document.getElementById('message_envoyer'+n).style.transition = "height 0.4s ease  0s"; 
document.getElementById('message_envoyer'+n).style.height="0px";
}

function effacer_rec(n){
document.getElementById('message_recu'+n).style.transition = "height 0.4s ease  0s"; 
document.getElementById('message_recu'+n).style.height="0px";

setTimeout(function(){document.getElementById('message_recu'+n).style.display="none";},400)}





