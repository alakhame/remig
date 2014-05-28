	var tnq=15;
	var pas=612/tnq;
	var inc=pas,k=1;
	var mun=1;

	function showQ(num){
		var o=num-1;
		$("#q_"+o).fadeOut('fast','linear');
		$("#q_"+num).fadeIn('slow','linear');
	}
	
	function init(){
		for(var o=1;o<=100;o++){
			$("#q_"+o).hide();
		 }
		 $("#q_1").show();
		 $("#sub_quest").hide();
	}
	var div1=$("#progression_question");
	var div2=$("#progression_question_bar");
	
	function nextQuestion(){
		num=num+1;
		  
		  var div3=$("#span_num_quest");
		  var div4=$("#num_question");
		div1.animate({top:'-3px'},400);
		div1.animate({top:'3px'},400);
		div1.animate({top:'-3px'},400);
		div1.animate({top:'3px'},400);
		div1.animate({top:'0px'},400);

		if(inc<612){inc=inc+pas;k++};

		div2.animate({width:(inc+5)+'px'},400);
		div2.animate({width:(inc-5)+'px'},400);
		div2.animate({width:(inc+5)+'px'},400);
		div2.animate({width:(inc-5)+'px'},400);
		div2.animate({width:(inc)+'px'},400);
		div3.html("15 السؤال "+k+" من أصل");
		div4.html(" "+k);
		if(k==tnq)div3.html("إنتهى الإختبار");
		 for(i=1;i<=4;i++){
		 $("#rep"+i+"_"+num).animate({  borderSpacing: -360 }, {
			step: function(now,fx) {
			  $(this).css('-webkit-transform','rotateX('+now+'deg)'); 
			  $(this).css('-moz-transform','rotateX('+now+'deg)');
			  $(this).css('transform','rotateX('+now+'deg)');
			},
			duration:'slow'
		},'linear');
		}

		 $("#img_quest_"+num).animate({  borderSpacing: -360 }, {
			step: function(now,fx) {
			  $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
			  $(this).css('-moz-transform','rotateY('+now+'deg)');
			  $(this).css('transform','rotateY('+now+'deg)');
			},
			duration:'slow'
		},'linear');

		$("#question_"+num).animate({  borderSpacing: -360 }, {
			step: function(now,fx) {
			  $(this).css('-webkit-transform','rotateX('+now+'deg)'); 
			  $(this).css('-moz-transform','rotateX('+now+'deg)');
			  $(this).css('transform','rotateX('+now+'deg)');
			},
			duration:'slow'
		},'linear');
		
		showQ(num);
		if(num==tnq)  {$("#sub_quest").show();$("#q_"+num).hide();div1.hide();div2.hide()}
		 
	}
	
	 
	
	/*function getQuestion(id)
	{
		var xhr2 = getXMLHttpRequest();
	
	xhr2.onreadystatechange = function() {
		if (xhr2.readyState == 4 && (xhr2.status == 200 || xhr2.status == 0)) {
					var q=document.getElementById("question");
					//var cn=document.createTextNode(xhr.responseXML.getElementsByTagName(question));
					//q.appendChild(cn) ;
					console.log(xhr2.responseXML.getElementsByTagName('reponse1').innerHTML);
					
		}
	};
	
	xhr2.open("GET", "http://127.0.0.1/remi/Symfony/web/app_dev.php/questions/pick/"+id, true);
	xhr2.send(null);
	}
	
	
	getQuestion(25);
		
		var rep1=document.getElementById("rep1_a"); */
		
		
function caucher(a,n){
for(var i=1; i<5 ;i++){document.getElementById('chek'+a+'_'+i).checked=false };
document.getElementById('chek'+a+'_'+n).checked=true;  

}


init();
