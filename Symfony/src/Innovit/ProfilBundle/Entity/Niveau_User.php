<?php

namespace Innovit\ProfilBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Niveau_User
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Niveau_User
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
     * @ORM\Column(name="id_user", type="integer")
     */
    private $idUser;

    /**
     * @var integer
     *
     * @ORM\Column(name="id_niveau", type="integer")
     */
    private $idNiveau;


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
     * Set idUser
     *
     * @param integer $idUser
     * @return Niveau_User
     */
    public function setIdUser($idUser)
    {
        $this->idUser = $idUser;

        return $this;
    }

    /**
     * Get idUser
     *
     * @return integer 
     */
    public function getIdUser()
    {
        return $this->idUser;
    }

    /**
     * Set idNiveau
     *
     * @param integer $idNiveau
     * @return Niveau_User
     */
    public function setIdNiveau($idNiveau)
    {
        $this->idNiveau = $idNiveau;

        return $this;
    }

    /**
     * Get idNiveau
     *
     * @return integer 
     */
    public function getIdNiveau()
    {
        return $this->idNiveau;
    }
}
