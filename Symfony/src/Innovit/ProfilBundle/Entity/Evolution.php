<?php

namespace Innovit\ProfilBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Evolution
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Evolution
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
     * @ORM\Column(name="id_mat", type="integer")
     */
    private $idMat;

    /**
     * @var integer
     *
     * @ORM\Column(name="note", type="integer")
     */
    private $note;


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
     * @return Evolution
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
     * Set idMat
     *
     * @param integer $idMat
     * @return Evolution
     */
    public function setIdMat($idMat)
    {
        $this->idMat = $idMat;

        return $this;
    }

    /**
     * Get idMat
     *
     * @return integer 
     */
    public function getIdMat()
    {
        return $this->idMat;
    }

    /**
     * Set note
     *
     * @param integer $note
     * @return Evolution
     */
    public function setNote($note)
    {
        $this->note = $note;

        return $this;
    }

    /**
     * Get note
     *
     * @return integer 
     */
    public function getNote()
    {
        return $this->note;
    }
}
