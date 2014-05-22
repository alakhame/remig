<?php

namespace Innovit\ProfilBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use	Innovit\ProfilBundle\Entity\Question;

use Symfony\Component\HttpFoundation\Response;
class TestprofController extends Controller
{
		
	public function  sendquestAction()
    { /*$msgs=array();
		$criteres=array("idExp"=>1);
		$doctrine = $this->getDoctrine();
		$msgs=$doctrine->getRepository('InnovitProfilBundle:question')->findby($criteres);
        return $this->render("InnovitProfilBundle:question:msgSend.html.twig",array('msg'=>$msgs)); */
		
		$question = new Question;
		$request = $this->get('request');

		if ($request->getMethod() == 'POST') {
			
				$em = $this->getDoctrine()->getManager();
				$question->setIdCours($_POST['choix_cours']);
				$question->setQuestion($_POST['question']);
				$question->setRep1($_POST['rep1']);
				$question->setRep2($_POST['rep2']);
				$question->setRep3($_POST['rep3']);
				$question->setRep4($_POST['rep4']);
				$question->setExplications($_POST['justification']);
				$question->setRep($_POST['rep1']);
				
				$em->persist($question);
				$em->flush();
		$tab=array("اختبارات","تلامذتي","طلب الإلتحاق","رسائل");
        return $this->render('InnovitProfilBundle:profil:profilprof.html.twig', array('articles' => $tab));
		}
		
		else{
			return new Response("bouuuuuuuu!!! :P");
		}
    }
	
public function chargerquestAction()
    {  $quests=array();
		$criteres=array();
		$doctrine = $this->getDoctrine();
		$quests=$doctrine->getRepository('InnovitProfilBundle:Question')->findby($criteres);
        return $this->render("InnovitProfilBundle:quest_prof:question_prof.html.twig",array('questions'=>$quests));
    }

	
	public function modifierquestAction()
    {  $question_modf = new Question;
		$request = $this->get('request');

		if ($request->getMethod() == 'POST') {
			
				$em = $this->getDoctrine()->getManager();
				$question_modf = $em->getRepository('InnovitProfilBundle:Question')->find($_POST['modif_id']);
				$question_modf->setIdCours($_POST['choix_cours)']);
				$question_modf->setQuestion($_POST['modif_question']);
				$question_modf->setRep1($_POST['modif_rep1']);
				$question_modf->setRep2($_POST['modif_rep2']);
				$question_modf->setRep3($_POST['modif_rep3']);
				$question_modf->setRep4($_POST['modif_rep4']);
				$question_modf->setExplications($_POST['modif_justi']);
				$question_modf->setRep($_POST['modif_rep1']);
				
				
				$em->flush();
				
		$tab=array("اختبارات","تلامذتي","طلب الإلتحاق","رسائل");
        return $this->render('InnovitProfilBundle:profil:profilprof.html.twig', array('articles' => $tab));
		}
		
		else{
			return new Response("bouuuuuuuu!!! :P");
		}
    }

}
