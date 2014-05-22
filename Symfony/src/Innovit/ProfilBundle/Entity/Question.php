<?php

namespace Innovit\ProfilBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Question
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Question
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
     * @ORM\Column(name="id_cours", type="integer")
     */
    private $idCours;

    /**
     * @var string
     *
     * @ORM\Column(name="question", type="string", length=255)
     */
    private $question;

    /**
     * @var string
     *
     * @ORM\Column(name="rep1", type="string", length=255)
     */
    private $rep1;

    /**
     * @var string
     *
     * @ORM\Column(name="rep2", type="string", length=255)
     */
    private $rep2;

    /**
     * @var string
     *
     * @ORM\Column(name="rep3", type="string", length=255)
     */
    private $rep3;

    /**
     * @var string
     *
     * @ORM\Column(name="rep4", type="string", length=255)
     */
    private $rep4;

    /**
     * @var string
     *
     * @ORM\Column(name="rep", type="string", length=255)
     */
    private $rep;

    /**
     * @var string
     *
     * @ORM\Column(name="explications", type="string", length=255)
     */
    private $explications;


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
     * Set idCours
     *
     * @param integer $idCours
     * @return Question
     */
    public function setIdCours($idCours)
    {
        $this->idCours = $idCours;

        return $this;
    }

    /**
     * Get idCours
     *
     * @return integer 
     */
    public function getIdCours()
    {
        return $this->idCours;
    }

    /**
     * Set question
     *
     * @param string $question
     * @return Question
     */
    public function setQuestion($question)
    {
        $this->question = $question;

        return $this;
    }

    /**
     * Get question
     *
     * @return string 
     */
    public function getQuestion()
    {
        return $this->question;
    }

    /**
     * Set rep1
     *
     * @param string $rep1
     * @return Question
     */
    public function setRep1($rep1)
    {
        $this->rep1 = $rep1;

        return $this;
    }

    /**
     * Get rep1
     *
     * @return string 
     */
    public function getRep1()
    {
        return $this->rep1;
    }

    /**
     * Set rep2
     *
     * @param string $rep2
     * @return Question
     */
    public function setRep2($rep2)
    {
        $this->rep2 = $rep2;

        return $this;
    }

    /**
     * Get rep2
     *
     * @return string 
     */
    public function getRep2()
    {
        return $this->rep2;
    }

    /**
     * Set rep3
     *
     * @param string $rep3
     * @return Question
     */
    public function setRep3($rep3)
    {
        $this->rep3 = $rep3;

        return $this;
    }

    /**
     * Get rep3
     *
     * @return string 
     */
    public function getRep3()
    {
        return $this->rep3;
    }

    /**
     * Set rep4
     *
     * @param string $rep4
     * @return Question
     */
    public function setRep4($rep4)
    {
        $this->rep4 = $rep4;

        return $this;
    }

    /**
     * Get rep4
     *
     * @return string 
     */
    public function getRep4()
    {
        return $this->rep4;
    }

    /**
     * Set rep
     *
     * @param string $rep
     * @return Question
     */
    public function setRep($rep)
    {
        $this->rep = $rep;

        return $this;
    }

    /**
     * Get rep
     *
     * @return string 
     */
    public function getRep()
    {
        return $this->rep;
    }

    /**
     * Set explications
     *
     * @param string $explications
     * @return Question
     */
    public function setExplications($explications)
    {
        $this->explications = $explications;

        return $this;
    }

    /**
     * Get explications
     *
     * @return string 
     */
    public function getExplications()
    {
        return $this->explications;
    }
}
