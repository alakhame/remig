   function getScrollPosition()
{
	return Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);
}

function scroll()
{
if(getScrollPosition()[1]>=195){
document.getElementById('Entete').style.position="fixed";
document.getElementById('Entete').style.top="-195px";

}

else{

document.getElementById('Entete').style.position="absolute";
document.getElementById('Entete').style.top="0px";
 
}

}