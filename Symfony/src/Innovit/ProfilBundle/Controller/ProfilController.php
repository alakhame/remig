<?php

namespace Innovit\ProfilBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\Event\FilterUserResponseEvent;
use FOS\UserBundle\Event\GetResponseUserEvent;
use FOS\UserBundle\Model\UserInterface;

use Symfony\Component\HttpFoundation\Response;

class profilController extends Controller
{
	
   
    public function indexAction($type,$id)
    {   if($this->container->get('security.context')->getToken()->getUser()->getId()!=$id || $this->container->get('security.context')->getToken()->getUser()->getType()!=$type)
	    throw new AccessDeniedHttpException('Vous n êtes pas sur votre profil');
		if($type=="etudiant"){$tab=array("التقدم","اختبار المستوى","اختبار للمراجعة","الالتحاق بأستاذ","المواد و الدروس","أساتذتي","رسائل");
        return $this->render('InnovitProfilBundle:profil:profiletudiant.html.twig', array('articles' => $tab));
		}
		if($type=="prof"){   $tab=array("اختبارات","تلامذتي","طلب الإلتحاق","رسائل");
        return $this->render('InnovitProfilBundle:profil:profilprof.html.twig', array('articles' => $tab));
		}
    }
	
	public function loadAction($page)
    {   $var='InnovitProfilBundle:profil:'.$page;
        return $this->render($var);
    }
	

}
