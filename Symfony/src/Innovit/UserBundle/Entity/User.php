<?php

namespace Innovit\UserBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class User extends BaseUser
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
	
	/**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255)
     */
	 
	private $nom;
	 /**
     * @var string
     *
     * @ORM\Column(name="niveau", type="string", length=255)
     */
	private $niveau;
 /**
     * @var integer
     *
     * @ORM\Column(name="numNat", type="integer")
     */
	private $numNat;

	/**
     * @var string
     *
     * @ORM\Column(name="typ", type="string", length=255)
     */
	private $typ;
	
	
    /**
     * @var string
     *
     * @ORM\Column(name="prenom", type="string", length=255)
     */
    private $prenom;
/**
     * @var string
     *
     * @ORM\Column(name="ecole", type="string", length=255)
     */
	private $ecole;

	/**
     * @var string
     *
     * @ORM\Column(name="ville", type="string", length=255)
     */
	private $ville;
    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_insc", type="date")
     */
    private $dateInsc;


	
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
     * Set nom
     *
     * @param string $nom
     * @return Utilisateur
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string 
     */
    public function getNom()
    {
        return $this->nom;
    }
	 /**
     * Set niveau
     *
     * @param string $nom
     * @return Utilisateur
     */
    public function setNiveau($niveau)
    {
        $this->niveau = $niveau;

        return $this;
    }

    /**
     * Get niveau
     *
     * @return string 
     */
    public function getNiveau()
    {
        return $this->niveau;
    }
	 /**
     * Set numNat
     *
     * @param integer $numNat
     * @return Utilisateur
     */
    public function setNumNat($numNat)
    {
        $this->numNat = $numNat;

        return $this;
    }

    /**
     * Get numNat
     *
     * @return integer 
     */
    public function getNumNat()
    {
        return $this->numNat;
    }
	 /**
     * Set ecole
     *
     * @param string $ecole
     * @return Utilisateur
     */
    public function setEcole($ecole)
    {
        $this->ecole = $ecole;

        return $this;
    }

    /**
     * Get ecole
     *
     * @return string 
     */
    public function getecole()
    {
        return $this->ecole;
    }
	 /**
     * Set ville
     *
     * @param string $ville
     * @return Utilisateur
     */
    public function setVille($ville)
    {
        $this->ville = $ville;

        return $this;
    }

    /**
     * Get ville
     *
     * @return string 
     */
    public function getVille()
    {
        return $this->ville;
    }
	/**
     * Set typ
     *
     * @param string $typ
     * @return Utilisateur
     */
    public function setType($typ)
    {
        $this->typ = $typ;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string 
     */
    public function getType()
    {
        return $this->typ;
    }
    /**
     * Set prenom
     *
     * @param string $prenom
     * @return Utilisateur
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;

        return $this;
    }

    /**
     * Get prenom
     *
     * @return string 
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * Set dateInsc
     *
     * @param \DateTime $dateInsc
     * @return Utilisateur
     */
    public function setDateInsc($dateInsc)
    {
        $this->dateInsc = $dateInsc;

        return $this;
    }

    /**
     * Get dateInsc
     *
     * @return \DateTime 
     */
    public function getDateInsc()
    {
        return $this->dateInsc;
    }
	public function __construct()
    {
        parent::__construct();
        // your own logic
		$this->prenom="";
		$this->ecole="";
		$this->ville="";
		$this->niveau="";
		$this->numNat=0;
		$this->nom="";
		$this->type="e" ;
		$this->dateInsc=new \DateTime ;
    }
	
	
	
}
