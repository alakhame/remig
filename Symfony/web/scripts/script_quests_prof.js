
function afficherlemessage_envoyer(i){
var offsetHeight = document.getElementById('text_consl_prof'+i).offsetHeight+35;
document.getElementById('contenu_consl_prof'+i).style.border="1px solid rgb(200,200,200)";
document.getElementById('contenu_consl_prof'+i).style.borderTop="0px";

document.getElementById('contenu_consl_prof'+i).style.transition = "height 0.4s ease  0s"; 
document.getElementById('contenu_consl_prof'+i).style.height=offsetHeight+"px";
document.getElementById('masquer_consls'+i).style.display="inline-block";
document.getElementById('afficher_consls'+i).style.display="none";

}

function masquerlemessage_envoyer(i){
document.getElementById('contenu_consl_prof'+i).style.transition = "height 0.4s ease  0s"; 
document.getElementById('contenu_consl_prof'+i).style.height="0px";

document.getElementById('masquer_consls'+i).style.display="none";
document.getElementById('afficher_consls'+i).style.display="inline-block";
document.getElementById('contenu_consl_prof'+i).style.border="0px";
}
