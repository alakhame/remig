<?php

namespace Innovit\ProfilBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use	Innovit\ProfilBundle\Entity\Message;
use	Innovit\ProfilBundle\Entity\Utilisateur;
use Symfony\Component\HttpFoundation\Response;
class MessageController extends Controller
{
	public function recusAction()
    {  $msgs=array();
		$criteres=array("idDest"=>1);
		$doctrine = $this->getDoctrine();
		$msgs=$doctrine->getRepository('InnovitProfilBundle:Message')->findby($criteres);
        return $this->render("InnovitProfilBundle:Message:msg.html.twig",array('msg'=>$msgs));
    }
	
	public function  sendAction()
    {  	
		$msgs=array();
		$criteres=array("idExp"=>1);
		$doctrine = $this->getDoctrine();
		$msgs=$doctrine->getRepository('InnovitProfilBundle:Message')->findby($criteres);
        return $this->render("InnovitProfilBundle:Message:msgSend.html.twig",array('msg'=>$msgs));
    }
	
	public function  sendNewAction()
    { /*$msgs=array();
		$criteres=array("idExp"=>1);
		$doctrine = $this->getDoctrine();
		$msgs=$doctrine->getRepository('InnovitProfilBundle:Message')->findby($criteres);
        return $this->render("InnovitProfilBundle:Message:msgSend.html.twig",array('msg'=>$msgs)); */
		
		$message = new Message;
		$request = $this->get('request');

		if ($request->getMethod() == 'POST') {
			
				$em = $this->getDoctrine()->getManager();
				$message->setIdExp(1);
				$message->setIdDest(1);
				$message->setObjet($_POST['objet']);
				$message->setContenu($_POST['message']);
				$message->setDateEnvoi(new \Datetime);
				$em->persist($message);
				$em->flush();
			return new Response("Congrats !!! :P");
		  
		}
		
		else{
			return new Response("bouuuuuuuu!!! :P");
		}
    }
	
	public function nameByIdAction($id){
		$doctrine = $this->getDoctrine();
		$user=$doctrine->getRepository('InnovitProfilBundle:Utilisateur')->findOneById($id);
        return new Response($user->getNom());
    }
	
	

}
