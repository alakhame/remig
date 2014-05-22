<?php
// Connexion à la base de données
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test', 'root', '');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$k=0;

// Récupération des 10 derniers messages
$reponse = $bdd->query('SELECT titre,image FROM slidershow');

// Affichage de chaque message (toutes les données sont protégées par htmlspecialchars)
while ($donnees = $reponse->fetch())
{$k++;
  $titre[$k]= $donnees['titre'];
  $image[$k]=$donnees['image'] ;
  
}

echo'
	
	
	<div id="division_slider_show" style="">
	
	
	
	

		
	<div id="division_slider_show_SPANS" style="position:absolute;z-index:5;bottom:10px;left:230px;">
	<div id="div1" style="display:inline-block">
	1
	</div>
	<div id="div2" style="margin-left:20px;display:inline-block">
	2
	</div>
	<div id="div3" style="margin-left:20px;display:inline-block;">
	3
	</div>
	<div id="div4" style="margin-left:20px;display:inline-block;">
	4
	</div>
	</div>
		
		
	
	
<div id="division_slider_show_image" style="">
		
	<div id="sls1"  style="">
	<img src="data:image/png;base64,' .$image[1].'" style=""/>
	</div>
	
	<div id="sls2"  style="">
	<img src="data:image/png;base64,' .$image[2].'" style=""/>
	</div>
	
	<div id="sls3"  style="">
	<img src="data:image/png;base64,' .$image[3].'" style=""/>
	</div>
	
	<div id="sls4"  style="">
	<img src="data:image/png;base64,' .$image[4].'" style=""/>
	</div>
		
	</div>
	
	</div>'
		?>
	
    