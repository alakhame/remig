<!DOCTYPE html>

<html id="" class="" lang="fr">

	<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="new.css" type="text/css" media="screen" />
	</head>
	 
	<body class="" style="" onscroll="scroll();" >
	   
        <div id="Entete" style="">
			<div class="box effect2" style="">
				<div id="logo" style="">
				    <img id="logo_image" src="logo.png" style=""/>
			     </div> 
				 <div id="grand_titre" style="">
				    SELF SCEDGEAL COATCHING
			     </div>   
			</div>   
			<img id="t_g" src="t_g.png" style=""/>
			<img id="t_d" src="t_d.png" style=""/>		
			<?php include('entete.php'); ?>
		</div>       
		<div id="corp" style=""> 
		
			
			<div id="info" style="">
				<div id="info_du_profil" class="effect2">
				<div id="image_de_profil"><img id="" src="user_icon.png" style=""/></div>
				<div id="donnees_de_profil">
				<div class="titre_div_info">Profil de:</div><div class="div_info">RHABI khalifa</div><br>
				<div class="titre_div_info">Ecole:</div><div class="div_info">Yahay Elgoudali</div><br>
				<div class="titre_div_info">Niveau:</div><div class="div_info">3eme année du collège</div><br>
				</div>
				</div>
				
				<div id="ligne_verticale"></div>
				
				
				
				<div id="info_du_profil_evolution">
					<div id="" style="color:#505050;font-size:1.1em">
						Votre pregréssion dans le programme de l'année:
					</div>
					<div id="barre" style="">
						<div id="barre_prog" style="">
						</div>
						<div id="pourcentage_prog" style="">
							16%
						</div>
					</div>
				</div>
			</div>	
			
		<div id="div_gauche_liste" class="" style="">        
		<?php
		$tab=array("","Evolution","Test de niveau","Test de révision","Matières et cours","Profs","Messages");
		for($i=1;$i<7;$i++){
		echo'
		<div id="case_liste_'.$i.'" class="case" style="">        
					<img id="icone_'.$i.'" src="png/32 px/Shape'.$i.'.png" class="icone"/>
					<div id="titre_liste_etudiant'.$i.'" class="titre_liste_etudiant">'.$tab[$i].'
					</div>
					<div id="informer'.$i.'"class="informer">'.$i.'
					</div>		
				</div>
						
		';}	
		?>
			</div>
			<div id="div_droite" class="" style="">		
			</div>
			<footer style="">
			</footer>		 
		 </div>		

<script  src="script_accueil.js" > </script>
<script  src="script_liste_etudiant.js" > </script>				
	</body>
</html>



