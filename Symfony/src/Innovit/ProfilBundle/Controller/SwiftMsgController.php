<?php

namespace Innovit\ProfilBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use	Innovit\ProfilBundle\Entity\Question;

use Symfony\Component\HttpFoundation\Response;
class SwiftMsgController extends Controller
{
		
	public function  indexAction()
    { 
		$doctrine = $this->getDoctrine();
		$q=$doctrine->getRepository('InnovitProfilBundle:Question')->findBy(array('idCours'=>'4')); 
		
		$message = \Swift_Message::newInstance()
        ->setSubject('Hello Email')
        ->setFrom('ndiaye.khadim.inpt@gmail.com')
        ->setTo('ndiaye.khadim.inpt@gmail.com')
        ->setBody($this->renderView('InnovitQuestionBundle:Question:pick.html.twig', array(  'qs' => $q) ))
		;
	
		
		$this->get('mailer')->send($message);

		return new Response("good !");
	}
}