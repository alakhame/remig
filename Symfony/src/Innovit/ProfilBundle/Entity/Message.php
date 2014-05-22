<?php

namespace Innovit\ProfilBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Message
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Message
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
     * @ORM\Column(name="id_dest", type="integer")
     */
    private $idDest;

    /**
     * @var integer
     *
     * @ORM\Column(name="id_exp", type="integer")
     */
    private $idExp;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_envoi", type="date")
     */
    private $dateEnvoi;

    /**
     * @var string
     *
     * @ORM\Column(name="objet", type="string", length=100)
     */
    private $objet;

    /**
     * @var string
     *
     * @ORM\Column(name="contenu", type="string", length=255)
     */
    private $contenu;


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
     * Set idDest
     *
     * @param integer $idDest
     * @return Message
     */
    public function setIdDest($idDest)
    {
        $this->idDest = $idDest;

        return $this;
    }

    /**
     * Get idDest
     *
     * @return integer 
     */
    public function getIdDest()
    {
        return $this->idDest;
    }

    /**
     * Set idExp
     *
     * @param integer $idExp
     * @return Message
     */
    public function setIdExp($idExp)
    {
        $this->idExp = $idExp;

        return $this;
    }

    /**
     * Get idExp
     *
     * @return integer 
     */
    public function getIdExp()
    {
        return $this->idExp;
    }

    /**
     * Set dateEnvoi
     *
     * @param \DateTime $dateEnvoi
     * @return Message
     */
    public function setDateEnvoi($dateEnvoi)
    {
        $this->dateEnvoi = $dateEnvoi;

        return $this;
    }

    /**
     * Get dateEnvoi
     *
     * @return \DateTime 
     */
    public function getDateEnvoi()
    {
        return $this->dateEnvoi;
    }

    /**
     * Set objet
     *
     * @param string $objet
     * @return Message
     */
    public function setObjet($objet)
    {
        $this->objet = $objet;

        return $this;
    }

    /**
     * Get objet
     *
     * @return string 
     */
    public function getObjet()
    {
        return $this->objet;
    }

    /**
     * Set contenu
     *
     * @param string $contenu
     * @return Message
     */
    public function setContenu($contenu)
    {
        $this->contenu = $contenu;

        return $this;
    }

    /**
     * Get contenu
     *
     * @return string 
     */
    public function getContenu()
    {
        return $this->contenu;
    }
}
