<?php

namespace Innovit\ProfilBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use	Innovit\ProfilBundle\Entity\Matiere;

class MenuController extends Controller
{
	public function evolutionAction()
    {  $menu=array();
		$doctrine = $this->getDoctrine();
		$menu=$doctrine->getRepository('InnovitProfilBundle:Matiere')->findAll();
        return $this->render("InnovitProfilBundle:Menu:evolution.html.twig",array('menu'=>$menu));
    }
	
	public function matCoursAction()
    {  $menu=array();
		$doctrine = $this->getDoctrine();
		$menu=$doctrine->getRepository('InnovitProfilBundle:Matiere')->findAll();
        return $this->render("InnovitProfilBundle:Menu:matieres_cours.html.twig",array('menu'=>$menu));
    }
	
	public function coursByIdAction($id)
    {  $cours=array();
		$doctrine = $this->getDoctrine();
		$cours=$doctrine->getRepository('InnovitProfilBundle:Cours')->findBy(array('idMatiere'=>$id));
        return $this->render("InnovitProfilBundle:Menu:coursById.html.twig",array('cours'=>$cours));
    }
	
	public function matieresRevAction()
    {  $menu=array();
		$doctrine = $this->getDoctrine();
		$menu=$doctrine->getRepository('InnovitProfilBundle:Matiere')->findAll();
        return $this->render("InnovitProfilBundle:Menu:matieres_rev.html.twig",array('menu'=>$menu));
    }
	

}
