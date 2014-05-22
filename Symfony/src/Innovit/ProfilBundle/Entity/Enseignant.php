<?php

namespace Innovit\ProfilBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Enseignant
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Enseignant
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="id_eleve", type="integer")
     */
    private $idEleve;

    /**
     * @var integer
     *
     * @ORM\Column(name="id_prof", type="integer")
     */
    private $idProf;
	
	/**
     * @var integer
     *
     * @ORM\Column(name="etat", type="integer")
     */
    private $etat;
	
	


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set idEleve
     *
     * @param integer $idEleve
     * @return Enseignant
     */
    public function setIdEleve($idEleve)
    {
        $this->idEleve = $idEleve;

        return $this;
    }

    /**
     * Get idEleve
     *
     * @return integer 
     */
    public function getIdEleve()
    {
        return $this->idEleve;
    }

    /**
     * Set idProf
     *
     * @param integer $idProf
     * @return Enseignant
     */
    public function setIdProf($idProf)
    {
        $this->idProf = $idProf;

        return $this;
    }

    /**
     * Get etat
     *
     * @return integer 
     */
    public function getEtat()
    {
        return $this->etat;
    }
	
	public function setEtat($etat)
    {
        $this->etat = $etat;

        return $this;
    }

    
}
