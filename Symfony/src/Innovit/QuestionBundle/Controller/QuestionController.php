<?php

namespace Innovit\QuestionBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use	Innovit\ProfilBundle\Entity\Utilisateur;
use	Innovit\ProfilBundle\Entity\Enseignant;
use	Innovit\ProfilBundle\Entity\Question;

use Symfony\Component\HttpFoundation\Response;

class QuestionController extends Controller
{
    public function pickAction($tnq)
    {	 
		$doctrine = $this->getDoctrine();
		$rep=$doctrine->getRepository('InnovitProfilBundle:Question'); 
		
		$query = $rep->createQueryBuilder('q')
					
			->getQuery();

		$q= $query->getResult();
		
		//$response = new Response($q->getRep());
	//return $response;
		//$response->headers->set('Content-Type', 'text/xml');
		//$qs[]=$q;
		return $this->render('InnovitQuestionBundle:Question:pick.html.twig', array(  'qs' => $q) ); 

	}
}
