<?php

namespace Innovit\ProfilBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use	Innovit\ProfilBundle\Entity\Utilisateur;
use	Innovit\ProfilBundle\Entity\Enseignant;
use Symfony\Component\HttpFoundation\Response;
class EnseignantController extends Controller
{
	public function getUserById($id){
		return $this->getDoctrine()->getRepository('InnovitProfilBundle:Utilisateur')->find($id);
	}
	
	public function mesProfsAction($id)
    {  $profs=array();
		$criteres=array("idEleve"=>$id, "etat"=>1);
		$doctrine = $this->getDoctrine();
		$ids=$doctrine->getRepository('InnovitProfilBundle:Enseignant')->findby($criteres);
		foreach( $ids as $id){
			$prof=$this->getDoctrine()->getRepository('InnovitProfilBundle:Utilisateur')->find($id->getId());
			$profs=array($prof);
		}
        return $this->render("InnovitProfilBundle:Enseignant:mesProfs.html.twig",array('profs'=>$profs));
    }
	
}